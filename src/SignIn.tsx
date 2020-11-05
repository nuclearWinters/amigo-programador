import { commitMutation, Environment } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { SignInMutation } from "./__generated__/SignInMutation.graphql";
import jwtDecode from "jwt-decode";

const mutation = graphql`
  mutation SignInMutation($input: SignInInput!) {
    signIn(input: $input) {
      refreshToken
      accessToken
    }
  }
`;

function commit(
  environment: Environment,
  password: string,
  retry: (token: string) => void,
  email: string
) {
  return commitMutation<SignInMutation>(environment, {
    mutation,
    variables: {
      input: {
        password,
        email,
      },
    },
    onCompleted: (response) => {
      localStorage.setItem("refreshToken", response.signIn.refreshToken);
      localStorage.setItem("accessToken", response.signIn.accessToken);
      retry(jwtDecode<{ _id: string }>(response.signIn.accessToken)._id);
    },
    onError: (err) => console.error(err),
  });
}

export default { commit };

import { commitMutation, Environment } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { SignUpMutation } from "./__generated__/SignUpMutation.graphql";
import jwtDecode from "jwt-decode";

const mutation = graphql`
  mutation SignUpMutation($input: SignUpInput!) {
    signUp(input: $input) {
      refreshToken
      accessToken
    }
  }
`;

function commit(
  environment: Environment,
  username: string,
  password: string,
  retry: (token: string) => void,
  email: string
) {
  return commitMutation<SignUpMutation>(environment, {
    mutation,
    variables: {
      input: {
        username,
        password,
        email,
      },
    },
    onCompleted: (response) => {
      localStorage.setItem("refreshToken", response.signUp.refreshToken);
      localStorage.setItem("accessToken", response.signUp.accessToken);
      retry(jwtDecode<{ _id: string }>(response.signUp.accessToken)._id);
    },
    onError: (err) => console.error(err),
  });
}

export default { commit };

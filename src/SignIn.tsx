import { commitMutation, Environment } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { SignInMutation } from "./__generated__/SignInMutation.graphql";
import jwtDecode from "jwt-decode";

const mutation = graphql`
  mutation SignInMutation($email: String!, $password: String!) {
    SignIn(email: $email, password: $password)
  }
`;

function commit(
  environment: Environment,
  password: string,
  retry: (token: string) => void,
  email: string
) {
  console.log(email, password);
  return commitMutation<SignInMutation>(environment, {
    mutation,
    variables: {
      email,
      password,
    },
    onCompleted: (response) => {
      localStorage.setItem("token", response.SignIn);
      retry(jwtDecode<{ id: string }>(response.SignIn).id);
    },
    onError: (err) => console.error(err),
  });
}

export default { commit };

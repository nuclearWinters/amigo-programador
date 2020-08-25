import { commitMutation, Environment } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { SignUpMutation } from "./__generated__/SignUpMutation.graphql";
import jwtDecode from "jwt-decode";

const mutation = graphql`
  mutation SignUpMutation($name: String!, $password: String!, $email: String!) {
    SignUp(name: $name, password: $password, email: $email)
  }
`;

function commit(
  environment: Environment,
  name: string,
  password: string,
  retry: (token: string) => void,
  email: string
) {
  return commitMutation<SignUpMutation>(environment, {
    mutation,
    variables: {
      name,
      password,
      email,
    },
    onCompleted: (response) => {
      localStorage.setItem("token", response.SignUp);
      retry(jwtDecode<{ id: string }>(response.SignUp).id);
    },
    onError: (err) => console.error(err),
  });
}

export default { commit };

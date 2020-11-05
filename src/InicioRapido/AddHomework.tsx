/*import { commitMutation, Environment } from "react-relay";
import graphql from "babel-plugin-relay/macro";

const mutation = graphql`
  mutation AddHomeworkMutation($file: AddHomeworkInput!) {
    addHomework(input: $file) {
      id
    }
  }
`;

function commit(
  environment: Environment,
  post: any,
  file: any,
  onCompleted: any,
  onError: any
) {
  const variables = {
    file: {
      file: "post.title",
    },
  };
  let uploadables;
  if (file) {
    uploadables = {
      file,
    };
  }
  return commitMutation(environment, {
    mutation,
    variables,
    uploadables,
    onCompleted,
    onError,
  });
}

export default { commit };*/

export {};

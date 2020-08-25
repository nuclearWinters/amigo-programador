import { commitMutation, Environment } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { UpdateCurrentTopicMutation } from "./__generated__/UpdateCurrentTopicMutation.graphql";

const mutation = graphql`
  mutation UpdateCurrentTopicMutation($index: Int!) {
    UpdateCurrentTopic(index: $index)
  }
`;

function commit(environment: Environment, index: number) {
  const variables = {
    index,
  };
  commitMutation<UpdateCurrentTopicMutation>(environment, {
    mutation,
    variables,
  });
}

export default { commit };

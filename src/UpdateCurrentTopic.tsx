import { commitMutation, Environment } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { UpdateCurrentTopicMutation } from "./__generated__/UpdateCurrentTopicMutation.graphql";

const mutation = graphql`
  mutation UpdateCurrentTopicMutation($input: UpdateCurrentTopicInput!) {
    updateCurrentTopic(input: $input) {
      topic
    }
  }
`;

function commit(environment: Environment, topic: string, refreshToken: string) {
  const variables = {
    topic,
    refreshToken,
  };
  commitMutation<UpdateCurrentTopicMutation>(environment, {
    mutation,
    variables: {
      input: variables,
    },
  });
}

export default { commit };

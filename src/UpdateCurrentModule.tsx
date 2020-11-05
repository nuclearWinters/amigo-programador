/*import { commitMutation, Environment } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { ConnectionHandler } from "relay-runtime";
import { UpdateCurrentTopicAndModuleInput, UpdateCurrentTopicAndModuleMutation } from "./__generated__/UpdateCurrentTopicAndModuleMutation.graphql";

const mutation = graphql`
  mutation UpdateCurrentTopicAndModuleMutation(
    $input: UpdateCurrentTopicAndModuleInput!
  ) {
    UpdateCurrentTopicAndModule(input: $input) {
      topic
      modules {
        QuickStart
        HTML
        CSS
        Javascript
        React
        Node
        Express
        MongoDB
      }
      clientMutationId
    }
  }
`;

function sharedUpdater(
  store: RecordSourceSelectorProxy,
  user: TodoApp_user,
  newEdge: RecordProxy
) {
  const userProxy = store.get(user.id);
  const conn = ConnectionHandler.getConnection(userProxy, "TodoList_todos");
  ConnectionHandler.insertEdgeAfter(conn, newEdge);
}

let tempID = 0;

function commit(
  environment: Environment,
  topicIndex: number,
  moduleIndex: number,
  name: string
) {
  const input: UpdateCurrentTopicAndModuleInput = {
    topicIndex,
    moduleIndex,
    name,
    clientMutationId: `${tempID++}`,
  };

  return commitMutation<UpdateCurrentTopicAndModuleMutation>(environment, {
    mutation,
    variables: {
      input,
    },
    updater: (store) => {
      const payload = store.getRootField("addTodo");
      const newEdge = payload.getLinkedRecord("todoEdge");
      sharedUpdater(store, user, newEdge);
    },
    optimisticUpdater: (store) => {
      const id = "client:newTodo:" + tempID++;
      const node = store.create(id, "Todo");
      node.setValue(text, "text");
      node.setValue(id, "id");

      const newEdge = store.create("client:newEdge:" + tempID++, "TodoEdge");
      newEdge.setLinkedRecord(node, "node");
      sharedUpdater(store, user, newEdge);

      // Get the UserProxy, and update the totalCount
      const userProxy = store.get(user.id);

      if (!userProxy) {
        throw new Error("Failed to retrieve userProxy from store");
      }

      const totalCount = userProxy.getValue("totalCount");

      if (typeof totalCount !== "number") {
        throw new Error(
          `Expected userProxy.totalCount to be number, but got: ${typeof totalCount}`
        );
      }

      userProxy.setValue(totalCount + 1, "totalCount");
    },
  });
}

export default { commit };*/

import { commitMutation, Environment } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { UpdateCurrentModuleMutation } from "./__generated__/UpdateCurrentModuleMutation.graphql";

const mutation = graphql`
  mutation UpdateCurrentModuleMutation($input: UpdateCurrentModuleInput!) {
    updateCurrentModule(input: $input) {
      module
    }
  }
`;

function commit(
  environment: Environment,
  moduleIndex: number,
  name: string,
  refreshToken: string
) {
  const variables = {
    moduleIndex,
    name,
    refreshToken,
  };
  commitMutation<UpdateCurrentModuleMutation>(environment, {
    mutation,
    variables: {
      input: variables,
    },
  });
}

export default { commit };

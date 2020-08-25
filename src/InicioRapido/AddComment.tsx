import { commitMutation, Environment } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { AddCommentMutation } from "./__generated__/AddCommentMutation.graphql";
import { ConnectionHandler } from "relay-runtime";

const mutation = graphql`
  mutation AddCommentMutation($input: AddCommentInput!) {
    addComment(input: $input) {
      commentEdge {
        __typename
        cursor
        node {
          id
          likes
          comment
          user_id
          created
          totalSubcomments
        }
      }
    }
  }
`;

function sharedUpdater(store: any, newComment: any, id: any) {
  const userProxy = store.get(id);
  const conn: any = ConnectionHandler.getConnection(
    userProxy,
    "InicioRapido_comments"
  );
  ConnectionHandler.insertEdgeBefore(conn, newComment);
}

function commit(
  environment: Environment,
  comment: string,
  name: string,
  created: string,
  id: string
) {
  return commitMutation<AddCommentMutation>(environment, {
    mutation,
    variables: {
      input: { comment, name, created },
    },
    updater: (store) => {
      const payload = store.getRootField("addComment");
      const newComment = payload.getLinkedRecord("commentEdge");
      sharedUpdater(store, newComment, id);
    },
    onCompleted: (response) => {
      console.log(response, environment);
    },
    onError: (err) => console.error(err),
  });
}

export default { commit };

/*import { commitMutation, Environment } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { AddCommentOnCommentMutation } from "./__generated__/AddCommentOnCommentMutation.graphql";
import { ConnectionHandler } from "relay-runtime";

const mutation = graphql`
  mutation AddCommentOnCommentMutation($input: AddCommentOnCommentInput!) {
    addCommentOnComment(input: $input) {
      commentOnCommentEdge {
        __typename
        cursor
        node {
          id
          likes
          comment
          name
          created
          liked
        }
      }
    }
  }
`;

let tempID = 0;

function sharedUpdater(store: any, newComment: any, id: any) {
  const userProxy = store.get(id);
  const conn: any = ConnectionHandler.getConnection(
    userProxy,
    "ComentarioComponent_comments"
  );
  ConnectionHandler.insertEdgeBefore(conn, newComment);
  //const conn2: any = ConnectionHandler.getConnection(
  //  userProxy,
  //  "InicioRapido_comments"
  //);
  //const edges = conn2.getLinkedRecords("edges");
  //console.log(edges);
}

function commit(
  environment: Environment,
  comment: string,
  name: string,
  created: string,
  id: string,
  idParentComment: string
) {
  return commitMutation<AddCommentOnCommentMutation>(environment, {
    mutation,
    variables: {
      input: { comment, name, created, idParentComment },
    },
    updater: (store: any) => {
      const payload = store.getRootField("addCommentOnComment");
      const newComment = payload.getLinkedRecord("commentOnCommentEdge");
      //const note = store.get("VXNlcjpHSFJUUg==");
      //note.setValue("wdsb nuevo rueda", "name");
      //const comm = store.get(id);
      //const rootField = store.getRootField("user");
      //rootField.getLinkedRecord("comments");
      //console.log(rootField.getLinkedRecord("comments"));
      //const record = store.create(id, 'CommentEdge');
      //console.log(comm.getValue("hasComments"));
      //comm.setValue(100, "hasComments");
      //
      //console.log(comm.getValue("hasComments"));
      //const comment = store.getRootField("addComment");
      //const newTestComment = comment.getLinkedRecord("commentEdge");
      //const userProxy = store.get(idParentComment);
      //const conn: any = ConnectionHandler.getConnection(
      //  userProxy,
      //  "InicioRapido_comments"
      //);
      //ConnectionHandler.createEdge(store, conn, newComment, 'commentEdge');
      //comment.setL(comment.getLinkedRecord("hasComments") + 1, "hasComments");
      sharedUpdater(store, newComment, id);
      //console.log(comment.getLinkedRecord("hasComments"));
    },
    onCompleted: (response) => {
      console.log(response, environment);
    },
    onError: (err) => console.error(err),
    optimisticUpdater: (store) => {
      const OptimisticId = "client:newCommentOnComment:" + tempID++;
      const node = store.create(OptimisticId, "CommentOnComment");
      node.setValue(idParentComment, "idParentComment");
      node.setValue(name, "name");
      node.setValue(comment, "comment");
      node.setValue(OptimisticId, "id");
      const newEdge = store.create(
        "client:newEdge:" + tempID++,
        "CommentOnCommentEdge"
      );
      newEdge.setLinkedRecord(node, "node");
      sharedUpdater(store, newEdge, id);
    },
  });
}

export default { commit };*/

export {};

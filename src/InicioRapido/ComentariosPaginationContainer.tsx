/*import React from "react";
import ComentarioComponent from "./ComentarioComponent";
import { createPaginationContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

interface IProps {}

const ComentariosPaginationContainer: React.FC<IProps> = ({}) => {
  const renderComments = () => {
    try {
      if (!topics.edges) throw new Error("assertion failed");
      const topicSelected = topics.edges[currentTopic]?.node?.modules;
      if (!topicSelected) throw new Error("assertion failed");
      return topicSelected.map((module) => {
        if (!module) throw new Error("assertion failed");
        const moduleSelected = module.comments.edges;
        console.log(moduleSelected);
        if (!moduleSelected) throw new Error("assertion failed");
        return moduleSelected.map((node) => {
          if (!node?.node) throw new Error("assertion failed");
          return (
            <div style={{ marginBottom: 22 }} key={node.node.id}>
              <ComentarioComponent
                comment={node.node}
                //onDeleteComment={(id: string) => {
                //const newComments = comments.filter(
                //  (item: any) => item.id !== id
                //);
                //setComments(newComments);
                //}}
              />
            </div>
          );
        });
      });
    } catch (e) {
      return <div></div>;
    }
  };
  return <div></div>;
};*/

/*export default createPaginationContainer(
  ComentariosPaginationContainer,
  {
    user: graphql`
      fragment ComentariosPaginationContainer_user on User
        @argumentDefinitions(
          count: { type: "Int", defaultValue: 5 }
          cursor: { type: "String" }
        ) {
        comments(first: $count, after: $cursor)
          @connection(key: "ComentariosPaginationContainer_comments") {
          edges {
            node {
              id
            }
          }
        }
      }
    `,
  },
  {
    direction: "forward",
    getConnectionFromProps(props) {
      return props.comment && props.comment.comment;
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      };
    },
    getVariables(props, { count, cursor }, fragmentVariables) {
      return {
        count,
        cursor,
        id: props.comment.id,
      };
    },
    query: graphql`
      query ComentariosPaginationContainerPaginationQuery(
        $count: Int!
        $cursor: String
        $id: ID!
      ) {
        user: node(id: $id) {
          ...ComentariosPaginationContainer_user
            @arguments(count: $count, cursor: $cursor)
        }
      }
    `,
  }
);
*/

import React from "react";

export default function ComentariosPaginationContainer() {
  return <div></div>;
}

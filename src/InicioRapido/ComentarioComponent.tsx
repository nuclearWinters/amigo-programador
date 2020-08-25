/*import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import ComentarioBody from "./ComentarioBody";
import moment from "moment";
import {
  createPaginationContainer,
  RelayPaginationProp,
  createFragmentContainer,
} from "react-relay";
import graphql from "babel-plugin-relay/macro";
import ComentariosDeComentarios from "./ComentariosDeComentarios";
import AddCommentOnComment from "./AddCommentOnComment";
import { ComentarioComponent_comment } from "./__generated__/ComentarioComponent_comment.graphql";

interface IProps {
  comment: ComentarioComponent_comment;
  //onDeleteComment: (id: string) => void;
  //relay: RelayPaginationProp;
}

const ComentarioComponent: React.FC<IProps> = ({
  //relay,
  comment,
  //onDeleteComment,
}) => {
  const idParentComment = comment.id;
  const [showComments, setShowComments] = useState<boolean>(false);
  const [comments, setComments] = useState<ComentarioComponent_comment[]>([]);
  const [hasCommentsState, setHasCommentsState] = useState<number>(
    comment.totalSubcomments
  );
  /*const _loadMore = () => {
    if (!relay.hasMore() || relay.isLoading()) {
      return;
    }
    relay.loadMore(5, (error: any) => {
      console.log("Error", error);
    });
  };*/
/*return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
        }}
      >
        <ComentarioBody
          id={comment.id}
          fontSize={20}
          iconSize={32}
          name={"comment.user_id"}
          created={comment.created}
          comment={comment.comment}
          likes={comment.likes}
          liked={false}
          idParentComment={idParentComment}
          onDeleteComment={(id: string) => {
            const newComments = comments.filter((item) => item.id !== id);
            setComments(newComments);
            //onDeleteComment(id);
            setHasCommentsState(hasCommentsState - 1);
          }}
          commentInputFunction={
            /*(
            comment: string,
            name: string,
            id: string,
            idParentComment: string
          ) => {
            AddCommentOnComment.commit(
              relay.environment,
              comment,
              name,
              moment().toISOString(),
              id,
              idParentComment
            );
            setShowComments(true);
          }*/ /*() => {}
          }
        />
        <div style={{ marginLeft: 44 }}>
          {comment.totalSubcomments !== 0 && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: 8,
              }}
            >
              <div
                onClick={() => {
                  setShowComments(!showComments);
                }}
                style={{
                  display: "flex",
                  cursor: "pointer",
                  alignItems: "center",
                }}
              >
                {showComments ? (
                  <FontAwesomeIcon
                    icon={faCaretUp}
                    size="sm"
                    color="#065fd4"
                    style={{ fontSize: 12, marginRight: 16 }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    size="sm"
                    color="#065fd4"
                    style={{ fontSize: 12, marginRight: 16 }}
                  />
                )}
                <div style={{ fontSize: 14, color: "#065fd4" }}>
                  {showComments ? "Ocultar" : "Mostrar"} {hasCommentsState}{" "}
                  comentarios
                </div>
              </div>
              <div style={{ flex: 1 }}></div>
            </div>
          )}
          {/*showComments && (
            <>
              {comment.comments?.edges?.map(({ node }: any) => (
                <ComentariosDeComentarios
                  comments={node}
                  key={node.id}
                  idParentComment={idParentComment}
                />
              ))}
              {relay.hasMore() && (
                <div
                  onClick={() => {
                    console.log("cargar más");
                    _loadMore();
                  }}
                >
                  Cargar Más...
                </div>
              )}
            </>
                )*/ /*}
        </div>
      </div>
    </div>
  );
};

/*export default createFragmentContainer(ComentarioComponent, {
  comment: graphql`
    fragment ComentarioComponent_comment on Comment {
      id
      likes
      comment
      user_id
      created
      totalSubcomments
    }
  `,
});*/

/*export default createPaginationContainer(
  ComentarioComponent,
  {
    comment: graphql`
      fragment ComentarioComponent_comment on Comment
        @argumentDefinitions(
          count: { type: "Int", defaultValue: 5 }
          cursor: { type: "String" }
        ) {
        id
        likes
        comment
        user_id
        created
        totalSubcomments
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
      query ComentarioComponentQuery($count: Int!, $cursor: String, $id: ID!) {
        user: node(id: $id) {
          ...ComentarioComponent_comment
            @arguments(count: $count, cursor: $cursor)
        }
      }
    `,
  }
);*/

import React from "react";

export default function ComentarioComponent() {
  return <div></div>;
}

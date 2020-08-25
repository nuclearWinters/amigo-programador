import React from "react";
import ComentarioBody from "./ComentarioBody";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

const ComentariosDeComentarios = (props: any) => {
  const { comments } = props;
  return (
    <>
      <div style={{ marginTop: 8 }} key={comments.id}>
        <ComentarioBody
          id={comments.id}
          fontSize={14}
          iconSize={24}
          comment={comments.comment}
          name={comments.name}
          created={comments.created}
          likes={comments.likes}
          liked={comments.liked}
          idParentComment={props.idParentComment}
          onDeleteComment={(id: string) => {
            //const newComments = comments.filter(
            //  (item) => item.id !== id
            //);
            //setComments(newComments);
            //setHasCommentsState(hasCommentsState - 1);
          }}
          commentInputFunction={(comment: string) => {
            //setIsLoadingNewComment(true);
            //fetch("http://localhost:4000/graphql", {
            //  method: "POST",
            //  headers: {
            //    "Content-Type": "application/json",
            //    Accept: "application/json",
            //  },
            //  body: JSON.stringify({
            //    query: `mutation {
            //        addComment(comment: "${comment.replace(
            //          /\n/g,
            //          "\\n"
            //        )}", name: "Armando Rueda", created: "${moment().toISOString()}", idParentComment: "${commentId}") {
            //          id
            //          likes
            //          comment
            //          name
            //          created
            //          idParentComment
            //          liked
            //        }
            //      }`,
            //    variables: null,
            //  }),
            //})
            //  .then((r) => r.json())
            //  .then((data) => {
            //    console.log("data returned:", data);
            //    setComments([...comments, data.data.addComment]);
            //    setIsLoadingNewComment(false);
            //    setHasCommentsState(hasCommentsState + 1);
            //  })
            //  .catch((err) => {
            //    setIsLoadingNewComment(false);
            //  });
          }}
        />
      </div>
      {/*commentsPosted.length > 0 && (
            <div>
              {commentsPosted.map((item) => (
                <div style={{ marginTop: 8 }} key={item.id}>
                  <ComentarioBody
                    id={item.id}
                    fontSize={14}
                    iconSize={24}
                    comment={item.comment}
                    name={item.name}
                    created={item.created}
                    likes={item.likes}
                    liked={item.liked}
                    onDeleteComment={(id: string) => {
                      const newComments = commentsPosted.filter(
                        (item) => item.id !== id
                      );
                      setCommentsPosted(newComments);
                      setHasCommentsState(hasCommentsState - 1);
                    }}
                    commentInputFunction={(comment: string) => {
                      setIsLoadingNewComment(true);
                      fetch("http://localhost:4000/graphql", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                          Accept: "application/json",
                        },
                        body: JSON.stringify({
                          query: `mutation {
                            addComment(comment: "${comment.replace(
                              /\n/g,
                              "\\n"
                            )}", name: "Armando Rueda", created: "${moment().toISOString()}", idParentComment: "${commentId}") {
                              id
                              likes
                              comment
                              name
                              created
                              idParentComment
                              liked
                            }
                          }`,
                          variables: null,
                        }),
                      })
                        .then((r) => r.json())
                        .then((data) => {
                          console.log("data returned:", data);
                          setCommentsPosted([
                            ...commentsPosted,
                            data.data.addComment,
                          ]);
                          setIsLoadingNewComment(false);
                          setHasCommentsState(hasCommentsState + 1);
                        })
                        .catch((err) => {
                          setIsLoadingNewComment(false);
                        });
                    }}
                  />
                </div>
                ))}
            </div>
          )*/}
    </>
  );
};

export default createFragmentContainer(ComentariosDeComentarios, {
  comments: graphql`
    fragment ComentariosDeComentarios_comments on CommentOnComment {
      id
      likes
      liked
      comment
      created
      name
      idParentComment
    }
  `,
});

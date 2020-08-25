import React, { useCallback, useState } from "react";
import YouTube from "react-youtube";
import Info from "./test.json";
import Switch from "react-switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faSearch,
  faCut,
  faCloudUploadAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useDropzone } from "react-dropzone";
import Play from "../imgs/Play6.svg";
import ComentarioInput from "./ComentarioInput";
//import ComentarioComponent from "./ComentarioComponent";
//import { css } from "@emotion/core";
//import BounceLoader from "react-spinners/BounceLoader";
import {
  createPaginationContainer,
  createFragmentContainer,
} from "react-relay";
import graphql from "babel-plugin-relay/macro";
import AddComment from "./AddComment";
import moment from "moment";
import AddHomework from "./AddHomework";
import { InicioRapido_user } from "./__generated__/InicioRapido_user.graphql";
//import ComentariosPaginationContainer from "./ComentariosPaginationContainer";

//const override = css`
//  display: block;
//  margin: 0 auto;
//  border-color: forestgreen;
//`;

interface IProps {
  user: InicioRapido_user;
}

const InicioRapido: React.FC<IProps> = ({
  user: { currentModule, currentTopic, topics },
}) => {
  const opts = {
    height: "507",
    width: "832",
  };
  const [selected, setSelected] = useState<number>(currentModule);
  const [modeSchoolOn, setModeSchoolOn] = useState<boolean>(true);
  //const [comments, setComments] = useState<any[]>([]);
  //const [isLoadingNewComment, setIsLoadingNewComment] = useState<boolean>(
  //  false
  //);
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFileName(acceptedFiles[0].name);
    setFile(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const renderModules = () => {
    try {
      if (!topics.edges) throw new Error("assertion failed");
      const topicSelected = topics.edges[currentTopic]?.node?.modules.edges;
      if (!topicSelected) throw new Error("assertion failed");
      return topicSelected.map((module, index) => {
        if (!module?.node) throw new Error("assertion failed");
        return (
          <div
            onClick={() => {
              setSelected(index);
            }}
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              paddingBottom: 6,
              paddingTop: 6,
              backgroundColor: selected === index ? "rgba(0,0,0,0.06)" : "#fff",
            }}
          >
            <div
              style={{
                width: 28,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "dimgray",
              }}
            >
              {selected === index ? (
                <FontAwesomeIcon
                  icon={faCaretRight}
                  size="2x"
                  color="rgba(0,0,0,0.6)"
                />
              ) : (
                index + 1
              )}
            </div>
            <img
              src={module.node.thumbnail}
              height="60"
              width="80"
              alt="Girl in a jacket"
            />
            <div
              style={{
                paddingTop: 3,
                paddingLeft: 10,
                paddingRight: 10,
                flex: 1,
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {module.node.title}
            </div>
          </div>
        );
      });
    } catch (e) {
      return <div></div>;
    }
  };
  /*const renderComments = () => {
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
  };*/
  /*const nodes: any =
    comments && comments.edges
      ? comments.edges
          .filter(Boolean)
          .map((edge: any) => edge.node)
          .filter(Boolean)
      : [];*/
  /*const _loadMore = () => {
    if (!relay.hasMore() || relay.isLoading()) {
      return;
    }
    relay.loadMore(
      5,
      (error: any) => {
        console.log("Error", error);
      }
      //{ force: true }
    );
  };*/
  if (true)
    return (
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div
          style={{
            flexDirection: "row",
            flex: 1,
            display: "flex",
            backgroundColor: "rgba(0,0,0,0.03)",
            justifyContent: "center",
            paddingTop: 30,
          }}
        >
          <div style={{ position: "relative", height: 507, width: 832 }}>
            <YouTube
              videoId="2g811Eo7K8U"
              opts={opts}
              //onStateChange={_onStateChange}
            />
          </div>
          <div
            style={{
              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.15)",
              borderStyle: "solid",
              display: "flex",
              flexDirection: "column",
              maxWidth: 410,
              marginLeft: 30,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "white",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  paddingRight: 4,
                  paddingLeft: 12,
                  alignSelf: "center",
                  fontSize: 20,
                  color: "rgba(0,0,0,0.8)",
                }}
              >
                Inicio rápido
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 26,
                  height: 26,
                  borderWidth: 4,
                  borderColor: "rgba(0,0,0,0.3)",
                  borderStyle: "solid",
                  borderRadius: "100%",
                  margin: 4,
                }}
              >
                <img
                  src={Play}
                  alt=""
                  height="18"
                  width="18"
                  style={{ marginLeft: 3 }}
                />
              </div>
              <label
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  paddingRight: 20,
                  backgroundColor: "white",
                }}
              >
                <span style={{ paddingRight: 10 }}>Modo Escuela</span>
                <Switch
                  onChange={() => setModeSchoolOn(!modeSchoolOn)}
                  checked={modeSchoolOn}
                />
              </label>
            </div>
            {renderModules()}
          </div>
        </div>
        <div
          style={{
            paddingTop: 14,
            fontSize: 20,
            fontWeight: 500,
            display: "flex",
            backgroundColor: "rgba(0,0,0,0.03)",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 832,
              display: "flex",
            }}
          >
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1, display: "flex" }}>
                  {Info.items[selected].snippet.title}
                </div>
                <FontAwesomeIcon
                  icon={faCut}
                  size="1x"
                  color="rgba(0,0,0,0.6)"
                  style={{ alignSelf: "center", paddingRight: 10 }}
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  size="1x"
                  color="rgba(0,0,0,0.6)"
                  style={{ alignSelf: "center", paddingRight: 10 }}
                />
              </div>
              <div style={{ display: "flex", fontSize: 16, marginTop: 16 }}>
                {Info.items[selected].snippet.description}
              </div>
              <div
                style={{
                  width: "100%",
                  backgroundColor: "rgba(0,0,0,0.1)",
                  height: 1,
                  marginTop: 24,
                  alignSelf: "center",
                }}
              ></div>
              <div style={{ paddingTop: 14, paddingBottom: 24 }}>
                {"totalCount"} Comentarios
              </div>
              <ComentarioInput
                iconSize={40}
                autofocus={false}
                onCancel={() => {}}
                onComment={
                  () => {} /*(comment: string) => {
                AddComment.commit(
                  relay.environment,
                  comment,
                  name,
                  moment().toISOString(),
                  id
                );*/
                  /*setIsLoadingNewComment(true);
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
                      )}", name: "Armando Rueda", created: "${moment().toISOString()}") {
                        id
                        likes
                        comment
                        name
                        created
                        hasComments
                        liked
                      }
                    }`,
                    variables: null,
                  }),
                })
                  .then((r) => r.json())
                  .then((data) => {
                    console.log("data returned:", data);
                    setComments([data.data.addComment, ...comments]);
                    setIsLoadingNewComment(false);
                  })
                  .catch((err) => {
                    setIsLoadingNewComment(false);
                  });*/
                  /*}*/
                }
              />
              {/*isLoadingNewComment && (
              <div
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BounceLoader
                  css={override}
                  size={36}
                  color={"forestgreen"}
                  loading={true}
                />
              </div>
            )*/}
              <div style={{ paddingTop: 24 }}>
                {/*renderComments()*/}
                {/*nodes.map((node: any) => (
                <div style={{ marginBottom: 22 }} key={node.id}>
                  <ComentarioComponent
                    comment={node}
                    onDeleteComment={(id: string) => {
                      //const newComments = comments.filter(
                      //  (item: any) => item.id !== id
                      //);
                      //setComments(newComments);
                    }}
                  />
                </div>
              ))*/}
                {/*relay.hasMore() && (
                <div
                  onClick={() => {
                    console.log("cargar más");
                    _loadMore();
                  }}
                >
                  Cargar Más...
                </div>
              )*/}
              </div>
            </div>
          </div>
          <div
            style={{
              width: 410,
              marginLeft: 30,
            }}
          >
            <div
              style={{
                border: "1px rgba(0,0,0,0.15) solid",
                backgroundColor: "white",
              }}
            >
              <div
                style={{
                  padding: "8px 12px",
                  fontSize: 22,
                  fontWeight: "bold",
                }}
              >
                Tarea:
              </div>
              <div style={{ padding: "0px 12px", fontSize: 16 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                consequatur ad saepe, earum velit atque magni inventore qui
                totam reiciendis doloribus aspernatur culpa ipsum architecto
                soluta fuga placeat. Necessitatibus, tempora!
              </div>
              <div
                {...getRootProps()}
                style={{
                  height: 200,
                  flex: 1,
                  margin: "14px",
                  border: isDragActive
                    ? "3px rgb(0,180,255) dashed"
                    : "3px rgba(0,0,0,0.4) dashed",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <input {...getInputProps()} />
                <FontAwesomeIcon
                  icon={faCloudUploadAlt}
                  size="4x"
                  color={isDragActive ? "rgb(0,180,255)" : "rgba(0,0,0,0.3)"}
                />
                <div
                  style={{
                    color: isDragActive ? "rgb(0,180,255)" : "rgba(0,0,0,0.3)",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  Arrastra archivos aquí
                </div>
                <div
                  style={{
                    color: fileName ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.3)",
                    fontSize: 16,
                    fontWeight: "bold",
                    padding: "8px 0px",
                  }}
                >
                  {fileName ? fileName : `ó`}
                </div>
                <div
                  style={{
                    border: isDragActive
                      ? "2px rgba(0,0,0,0.3) solid"
                      : "2px rgb(0,180,255) solid",
                    backgroundColor: "white",
                    color: isDragActive ? "rgba(0,0,0,0.3)" : "rgb(0,180,255)",
                    fontSize: 20,
                    fontWeight: "bold",
                    borderRadius: 4,
                    padding: "8px 24px",
                  }}
                >
                  Explora tus carpetas
                </div>
              </div>
              <div
                onClick={() => {
                  /*if (!file) return;
                console.log("Enviando...");
                AddHomework.commit(
                  relay.environment,
                  {
                    title: "post.title",
                    content: "post.content",
                    authorId: "post.authorId",
                  },
                  file,
                  () => {
                    console.log("finished");
                  },
                  () => console.log("error")
                );*/
                }}
                style={{
                  margin: "20px 30px",
                  padding: "10px 10px",
                  backgroundColor: file ? "rgb(0,100,180)" : "rgba(0,0,0,0.4)",
                  borderRadius: "4px",
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "28px",
                  cursor: file ? "pointer" : "default",
                }}
              >
                Enviar
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default createFragmentContainer(InicioRapido, {
  user: graphql`
    fragment InicioRapido_user on User {
      currentTopic
      currentModule
      topics {
        edges {
          node {
            id
            step
            name
            url
            type
            modules {
              edges {
                node {
                  title
                  description
                  thumbnail
                }
              }
            }
          }
        }
      }
    }
  `,
});

/*export default createPaginationContainer(
  InicioRapido,
  {
    user: graphql`
      fragment InicioRapido_user on User
        @argumentDefinitions(
          count: { type: "Int", defaultValue: 5 }
          cursor: { type: "String" }
        ) {
        currentTopic
        currentModule
        topics {
          edges {
            node {
              id
              step
              name
              url
              type
              modules {
                edges {
                  node {
                    title
                    description
                    thumbnail
                  }
                }
              }
            }
          }
        }
      }
    `,
  },
  {
    direction: "forward",
    getConnectionFromProps(props) {
      return props.user && props.user.comments;
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
        id: props.user.id,
      };
    },
    query: graphql`
      query InicioRapidoQuery($count: Int!, $cursor: String, $id: ID!) {
        user: node(id: $id) {
          ...InicioRapido_user @arguments(count: $count, cursor: $cursor)
        }
      }
    `,
  }
);*/

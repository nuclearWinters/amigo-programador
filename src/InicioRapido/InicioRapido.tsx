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
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { InicioRapido_user } from "./__generated__/InicioRapido_user.graphql";
import UpdateCurrentModule from "../UpdateCurrentModule";
import UpdateLocalCurrentModule from "../UpdateLocalCurrentModule";
import environment from "../relayConfiguration";
import { getRefreshToken } from "../utils";
import { useTypedSelector } from "../Redux";
import {
  EnviarButton,
  TijerasIcono,
  LupaIcono,
  UploadIcono,
} from "../components";

interface IProps {
  user: InicioRapido_user;
  id: string;
}

const InicioRapido: React.FC<IProps> = ({
  id,
  user: { currentTopic, currentModules },
}) => {
  const opts = {
    height: "507",
    width: "832",
  };
  const topics = useTypedSelector((state) => state.topicsAndModules.topics);
  const [selected, setSelected] = useState<number>(
    (currentModules as any)[currentTopic]
  );
  const [modeSchoolOn, setModeSchoolOn] = useState<boolean>(true);
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFileName(acceptedFiles[0].name);
    setFile(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const renderModules = () => {
    return topics[currentTopic].map((module, index) => {
      return (
        <div
          onClick={() => {
            setSelected(index);
            UpdateCurrentModule.commit(
              environment,
              index,
              currentTopic,
              getRefreshToken()
            );
            UpdateLocalCurrentModule.commitLocal(
              environment,
              currentTopic,
              index,
              id
            );
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
            src={module.thumbnail}
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
            {module.title}
          </div>
        </div>
      );
    });
  };
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
      <div style={bottomVideoContainer}>
        <div style={comentariosContainer}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1, display: "flex" }}>
                {Info.items[selected].snippet.title}
              </div>
              <TijerasIcono />
              <LupaIcono />
            </div>
            <div style={descripcionVideo}>
              {Info.items[selected].snippet.description}
            </div>
            <div style={linea} />
            <div style={totalComentarios}>{"totalCount"} Comentarios</div>
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
        <div style={tareaContainer}>
          <div style={tarea}>Tarea:</div>
          <div style={instruciones}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            consequatur ad saepe, earum velit atque magni inventore qui totam
            reiciendis doloribus aspernatur culpa ipsum architecto soluta fuga
            placeat. Necessitatibus, tempora!
          </div>
          <div {...getRootProps()} style={dropContainer(isDragActive)}>
            <input {...getInputProps()} />
            <UploadIcono active={isDragActive} />
            <div style={arrastraAqui(isDragActive)}>Arrastra archivos aquí</div>
            <div style={nombreArchivo(!!fileName)}>
              {fileName ? fileName : `ó`}
            </div>
            <div style={explora(isDragActive)}>Explora tus carpetas</div>
          </div>
          <EnviarButton disabled={!file} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default createFragmentContainer(InicioRapido, {
  user: graphql`
    fragment InicioRapido_user on User {
      currentModules {
        QuickStart
        HTML
        CSS
        Javascript
        React
        Node
        Express
        MongoDB
      }
      currentTopic
    }
  `,
});

const {
  explora,
  nombreArchivo,
  arrastraAqui,
  dropContainer,
}: {
  [argsName: string]: (active: boolean) => React.CSSProperties;
} = {
  explora: (active) => ({
    border: active ? "2px rgba(0,0,0,0.3) solid" : "2px rgb(0,180,255) solid",
    backgroundColor: "white",
    color: active ? "rgba(0,0,0,0.3)" : "rgb(0,180,255)",
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 4,
    padding: "8px 24px",
  }),
  nombreArchivo: (active) => ({
    color: active ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.3)",
    fontSize: 16,
    fontWeight: "bold",
    padding: "8px 0px",
  }),
  arrastraAqui: (active) => ({
    color: active ? "rgb(0,180,255)" : "rgba(0,0,0,0.3)",
    fontSize: 20,
    fontWeight: "bold",
  }),
  dropContainer: (active) => ({
    height: 200,
    flex: 1,
    margin: "14px",
    border: active ? "3px rgb(0,180,255) dashed" : "3px rgba(0,0,0,0.4) dashed",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  }),
};

const {
  tarea,
  instruciones,
  tareaContainer,
  totalComentarios,
  linea,
  descripcionVideo,
  comentariosContainer,
  bottomVideoContainer,
}: { [argsName: string]: React.CSSProperties } = {
  tarea: {
    padding: "8px 12px",
    fontSize: 22,
    fontWeight: "bold",
  },
  instruciones: { padding: "0px 12px", fontSize: 16 },
  tareaContainer: {
    width: 410,
    marginLeft: 30,
    border: "1px rgba(0,0,0,0.15) solid",
    backgroundColor: "white",
  },
  totalComentarios: { paddingTop: 14, paddingBottom: 24 },
  linea: {
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.1)",
    height: 1,
    marginTop: 24,
    alignSelf: "center",
  },
  descripcionVideo: { display: "flex", fontSize: 16, marginTop: 16 },
  comentariosContainer: {
    width: 832,
    display: "flex",
  },
  bottomVideoContainer: {
    paddingTop: 14,
    fontSize: 20,
    fontWeight: 500,
    display: "flex",
    backgroundColor: "rgba(0,0,0,0.03)",
    justifyContent: "center",
  },
};

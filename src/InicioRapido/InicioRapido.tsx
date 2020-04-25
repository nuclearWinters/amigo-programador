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
import moment from "moment";
import Play from "../imgs/Play-2.svg";
import ComentarioInput from "./ComentarioInput";
import ComentarioComponent from "./ComentarioComponent";

interface itemPlayList {
  snippet: {
    title: string;
    thumbnails: {
      default: {
        url: string;
      };
    };
  };
}

export default function InicioRapido() {
  const opts = {
    height: "507",
    width: "832",
  };
  let [selected, setSelected] = useState<number>(0);
  let [modeSchoolOn, setModeSchoolOn] = useState<boolean>(true);
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
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
          {Info.items.map((item: itemPlayList, index: number) => (
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
                backgroundColor:
                  selected === index ? "rgba(0,0,0,0.06)" : "#fff",
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
                src={item.snippet.thumbnails.default.url}
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
                {item.snippet.title}
              </div>
            </div>
          ))}
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
            <div
              style={{
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.1)",
                height: 1,
                marginTop: 24,
                alignSelf: "center",
              }}
            ></div>
            <div style={{ paddingTop: 14 }}>0 Comentarios</div>
            <ComentarioInput
              autofocus={false}
              onCancel={() => {}}
              onComment={() => {}}
            />
            <div style={{ paddingTop: 24 }}>
              {[
                {
                  comment:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic exercitationem officia beatae consectetur mollitia? Odit, ullam iure dolores neque molestias magnam fugiat impedit facere nemo sit veniam doloribus distinctio blanditiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic exercitationem officia beatae consectetur mollitia? Odit, ullam iure dolores neque molestias magnam fugiat impedit facere nemo sit veniam doloribus distinctio blanditiis.",
                  name: "Armando Rueda",
                  created: moment().subtract(1, "minutes"),
                  hasComments: 4,
                },
                {
                  comment:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic exercitationem officia beatae consectetur mollitia? Odit, ullam iure dolores neque molestias magnam fugiat impedit facere nemo sit veniam doloribus distinctio blanditiis.",
                  name: "Teresa Pérez",
                  created: moment().subtract(1, "hours"),
                  hasComments: 0,
                },
                {
                  comment:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic exercitationem officia beatae consectetur mollitia? Odit, ullam iure dolores neque molestias magnam fugiat impedit facere nemo sit veniam doloribus distinctio blanditiis.",
                  name: "Fernando Rueda",
                  created: moment().subtract(1, "days"),
                  hasComments: 1,
                },
              ].map((item) => (
                <ComentarioComponent item={item} />
              ))}
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
              style={{ padding: "8px 12px", fontSize: 22, fontWeight: "bold" }}
            >
              Tarea:
            </div>
            <div style={{ padding: "0px 12px", fontSize: 16 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              consequatur ad saepe, earum velit atque magni inventore qui totam
              reiciendis doloribus aspernatur culpa ipsum architecto soluta fuga
              placeat. Necessitatibus, tempora!
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
                  color: "rgba(0,0,0,0.3)",
                  fontSize: 16,
                  fontWeight: "bold",
                  padding: "8px 0px",
                }}
              >
                ó
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
          </div>
        </div>
      </div>
    </div>
  );
}

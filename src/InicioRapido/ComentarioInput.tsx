import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import styles from "./InicioRapido.module.scss";

type ComentarioInputProps = {
  autofocus: boolean;
  onCancel: Function;
  onComment: Function;
};

const ComentarioInput = ({
  autofocus,
  onCancel,
  onComment,
}: ComentarioInputProps) => {
  const [props, setProps] = useSpring(() => ({
    left: "50%",
    right: "50%",
    opacity: 0,
  }));
  let [comment, setComment] = useState<string>("");
  let [showButtonsComment, setShowButtonsComment] = useState<boolean>(false);
  return (
    <div style={{ paddingTop: 14, display: "flex" }}>
      <div
        style={{
          border: "2px black solid",
          borderRadius: "100%",
          height: 40,
          width: 40,
        }}
      ></div>
      <div
        style={{
          flex: 1,
          position: "relative",
          margin: "0px 16px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ flex: 1, display: "flex" }}>
          <input
            autoFocus={autofocus}
            onFocus={() => {
              setProps({ left: "0%", right: "0%", opacity: 1 });
              setShowButtonsComment(true);
            }}
            onBlur={() => {
              setProps({ left: "50%", right: "50%", opacity: 0 });
            }}
            onChange={(event) => {
              setComment(event.target.value);
            }}
            value={comment}
            placeholder="Escribe un comentario..."
            className={styles.inputComment}
            style={{
              flex: 1,
              height: 40,
              borderWidth: 0,
              width: "100%",
              borderBottom: "2px rgba(0,0,0,0.05) solid",
              padding: "0px",
              margin: "0px",
              fontSize: 14,
              backgroundColor: "rgba(0,0,0,0.0)",
            }}
          />
          <animated.div
            style={{
              position: "absolute",
              top: 40,
              borderWidth: 1,
              borderColor: "#5ab0db",
              borderStyle: "solid",
              ...props,
            }}
          ></animated.div>
        </div>
        {showButtonsComment && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "flex-end",
              margin: "8px 0px",
            }}
          >
            <button
              onClick={() => {
                setShowButtonsComment(false);
                setComment("");
                onCancel();
              }}
              style={{
                borderRadius: 2,
                border: "none",
                height: 40,
                backgroundColor: "rgba(0,0,0,0)",
                fontSize: 20,
                margin: "0px 16px",
                cursor: "pointer",
              }}
            >
              Cancelar
            </button>
            <button
              onClick={() => {
                onComment();
              }}
              style={{
                borderRadius: 2,
                border: "none",
                height: 40,
                fontSize: 20,
                padding: "0px 12px",
                color: "white",
                backgroundColor: comment !== "" ? "#167ac6" : "rgba(0,0,0,0.2)",
                cursor: comment !== "" ? "pointer" : "default",
              }}
            >
              Comentar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComentarioInput;

import React, { useState } from "react";
import ReactTextMoreLess from "react-text-more-less";
import styles from "./InicioRapido.module.scss";

type TextExpandedProps = {
  text: string;
};

const TextExpanded = ({ text }: TextExpandedProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  return (
    <div style={{ fontSize: 15, position: "relative" }}>
      <ReactTextMoreLess
        collapsed={collapsed}
        text={text}
        lessHeight={72}
        showMoreText="..."
        showMoreElement={
          <>
            <div style={{ marginBottom: 20 }}>...</div>
            <span
              onClick={() => {
                setCollapsed(!collapsed);
              }}
              className={styles.commnetHover}
              style={{
                cursor: "pointer",
                color: "rgba(0,0,0,0.5)",
                fontSize: 14,
                fontWeight: "bold",
                position: "absolute",
                height: 20,
                display: "flex",
                alignItems: "center",
                bottom: -4,
                left: 0,
              }}
            >
              Mostrar más
            </span>
          </>
        }
        showLessElement={
          <>
            <div style={{ marginBottom: 20 }}></div>
            <span
              onClick={() => {
                setCollapsed(!collapsed);
              }}
              className={styles.commnetHover}
              style={{
                cursor: "pointer",
                color: "rgba(0,0,0,0.5)",
                fontSize: 14,
                fontWeight: "bold",
                position: "absolute",
                height: 20,
                display: "flex",
                alignItems: "center",
                bottom: -4,
                left: 0,
              }}
            >
              Mostrar menos
            </span>
          </>
        }
      />
    </div>
  );
};

export default TextExpanded;

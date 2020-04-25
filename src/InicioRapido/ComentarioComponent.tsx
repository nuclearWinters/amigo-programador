import React, { useState } from "react";
import TextExpanded from "./TextExpanded";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Moment } from "moment";
import ComentarioInput from "./ComentarioInput";

type itemPlayList = {
  item: {
    comment: string;
    name: string;
    created: Moment;
    hasComments: number;
  };
};

const ComentarioComponent = ({ item }: itemPlayList) => {
  const [showCommentInput, setShowCommentInput] = useState<boolean>(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginBottom: 22,
      }}
    >
      <div
        style={{
          border: "2px black solid",
          height: 32,
          width: 32,
          borderRadius: "100%",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          margin: "2px 12px",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              fontSize: 14,
              fontWeight: "bold",
              marginBottom: 6,
            }}
          >
            {item.name}
          </div>
          <div
            style={{
              fontSize: 14,
              paddingLeft: 6,
              color: "rgba(0,0,0,0.6)",
            }}
          >
            {item.created.fromNow()}
          </div>
        </div>
        <TextExpanded text={item.comment} />
        <div style={{ display: "flex", margin: "12px 0px" }}>
          <FontAwesomeIcon
            icon={faThumbsUp}
            size="sm"
            color="rgba(0,0,0,0.6)"
            style={{ fontSize: 16 }}
          />
          <div
            style={{
              fontSize: 16,
              color: "rgba(0,0,0,0.6)",
              marginLeft: 8,
              alignSelf: "center",
            }}
          >
            0
          </div>
          <div
            onClick={() => {
              setShowCommentInput(true);
            }}
            style={{
              fontSize: 16,
              color: "rgba(0,0,0,0.6)",
              marginLeft: 16,
              alignSelf: "center",
              cursor: "pointer",
            }}
          >
            RESPONDER
          </div>
        </div>
        {showCommentInput && (
          <ComentarioInput
            autofocus={true}
            onCancel={() => {
              setShowCommentInput(false);
            }}
            onComment={() => {
              setShowCommentInput(false);
            }}
          />
        )}
        {item.hasComments !== 0 && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faCaretDown}
              size="sm"
              color="#065fd4"
              style={{ fontSize: 12, marginRight: 16 }}
            />
            <div style={{ fontSize: 14, color: "#065fd4" }}>
              Ver {item.hasComments} comentarios
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComentarioComponent;

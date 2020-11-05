import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Topic } from "./Topic";
import quickstart from "../imgs/Play6.svg";
import html from "../imgs/Html6.svg";
import css from "../imgs/Css6.svg";
import js from "../imgs/Javascript6.svg";
import react from "../imgs/React6.svg";
import node from "../imgs/Node6.svg";
import express from "../imgs/Express6.svg";
import mongodb from "../imgs/Mongodb6.svg";

interface IProps {
  id: string;
}

export const ArbolTech: React.FC<IProps> = ({ id }) => {
  const completado = false;
  const startLine = localStorage.getItem(`savedPreviousCompletedDivision`)
    ? 0
    : 64;
  const [propsLine, setLine] = useSpring(() => ({
    x: startLine,
    config: { duration: 750 },
  }));
  useEffect(() => {
    if (!completado)
      return localStorage.removeItem(`savedPreviousCompletedDivision`);
    setLine({ x: 0 });
    localStorage.setItem(`savedPreviousCompletedDivision$`, "true");
  }, [setLine, completado]);
  return (
    <div>
      <div style={{ height: 8 }}></div>
      <div>
        <Topic
          id={id}
          name="QuickStart"
          mode="start"
          image={quickstart}
          savedPreviousCompleted={Boolean(
            localStorage.getItem(`savedPreviousCompletedQuickStart`)
          )}
          previousCompleted={false}
          backgroundColor={"rgb(150,225,255)"}
          saved={Number(localStorage.getItem(`topicQuickStart`))}
          current={0}
          total={10}
        />
        <Topic
          id={id}
          name="HTML"
          mode="middle"
          image={html}
          savedPreviousCompleted={Boolean(
            localStorage.getItem(`savedPreviousCompletedQuickStart`)
          )}
          previousCompleted={false}
          backgroundColor={"rgb(150,225,255)"}
          saved={Number(localStorage.getItem(`topicQuickStart`))}
          current={0}
          total={10}
        />
        <Topic
          id={id}
          name="CSS"
          mode="middle"
          image={css}
          savedPreviousCompleted={Boolean(
            localStorage.getItem(`savedPreviousCompletedQuickStart`)
          )}
          previousCompleted={false}
          backgroundColor={"rgb(150,225,255)"}
          saved={Number(localStorage.getItem(`topicQuickStart`))}
          current={0}
          total={10}
        />
        <Topic
          id={id}
          name="Javascript"
          mode="middle"
          image={js}
          savedPreviousCompleted={Boolean(
            localStorage.getItem(`savedPreviousCompletedQuickStart`)
          )}
          previousCompleted={false}
          backgroundColor={"rgb(150,225,255)"}
          saved={Number(localStorage.getItem(`topicQuickStart`))}
          current={0}
          total={10}
        />
        <Topic
          id={id}
          name="React"
          mode="middle"
          image={react}
          savedPreviousCompleted={Boolean(
            localStorage.getItem(`savedPreviousCompletedQuickStart`)
          )}
          previousCompleted={false}
          backgroundColor={"rgb(150,225,255)"}
          saved={Number(localStorage.getItem(`topicQuickStart`))}
          current={0}
          total={10}
        />
        <div
          style={{
            backgroundColor: "white",
            height: 10,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 50,
              right: 140,
              top: 0,
              bottom: 0,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <animated.svg
              height="64"
              width="10"
              viewBox="0 0 10 64"
              stroke="#239b56"
              strokeWidth="10"
              strokeDasharray="64"
              strokeDashoffset={propsLine.x}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line
                x1="50%"
                y1="0"
                x2="50%"
                y2="64"
                stroke="white"
                fill="transparent"
                strokeDasharray="64"
                strokeDashoffset="0"
                strokeWidth="10"
              />
              <line x1="50%" y1="0" x2="50%" y2="64" />
            </animated.svg>
          </div>
        </div>
        <Topic
          id={id}
          name="Node"
          mode="middle"
          image={node}
          savedPreviousCompleted={Boolean(
            localStorage.getItem(`savedPreviousCompletedQuickStart`)
          )}
          previousCompleted={false}
          backgroundColor={"rgb(255, 182, 150)"}
          saved={Number(localStorage.getItem(`topicQuickStart`))}
          current={0}
          total={10}
        />
        <Topic
          id={id}
          name="Express"
          mode="middle"
          image={express}
          savedPreviousCompleted={Boolean(
            localStorage.getItem(`savedPreviousCompletedQuickStart`)
          )}
          previousCompleted={false}
          backgroundColor={"rgb(255, 182, 150)"}
          saved={Number(localStorage.getItem(`topicQuickStart`))}
          current={0}
          total={10}
        />
        <Topic
          id={id}
          name="MongoDB"
          mode="middle"
          image={mongodb}
          savedPreviousCompleted={Boolean(
            localStorage.getItem(`savedPreviousCompletedQuickStart`)
          )}
          previousCompleted={false}
          backgroundColor={"rgb(255, 182, 150)"}
          saved={Number(localStorage.getItem(`topicQuickStart`))}
          current={0}
          total={10}
        />
      </div>
    </div>
  );
};

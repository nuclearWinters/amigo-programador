import React, { useEffect } from "react";
import Topic from "./Topic";
import { useSpring, animated } from "react-spring";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { ArbolTech_topics } from "./__generated__/ArbolTech_topics.graphql";

interface IProps {
  topics: ArbolTech_topics;
}

export const ArbolTech: React.FC<IProps> = ({ topics }) => {
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
  const renderTopics = (type: string, color: string) => {
    if (!topics || !topics.edges) {
      throw new Error("assertion failed");
    }
    return topics.edges.map((edge, index) => {
      const topic = edge && edge.node;
      if (!topic) throw new Error("assertion failed");
      if (topic.type !== type) return null;
      return (
        <Topic
          index={index}
          topic={topic}
          key={topic.id}
          savedPreviousCompleted={Boolean(
            localStorage.getItem(`savedPreviousCompleted${topic.id}`)
          )}
          previousCompleted={false}
          backgroundColor={color}
          saved={Number(localStorage.getItem(`topic${topic.id}`))}
          current={0}
          total={10}
        />
      );
    });
  };
  return (
    <div>
      <div style={{ height: 8 }}></div>
      <div>
        {renderTopics("frontend", "rgb(150,225,255)")}
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
        {renderTopics("backend", "rgb(255, 182, 150)")}
      </div>
    </div>
  );
};

export default createFragmentContainer(ArbolTech, {
  topics: graphql`
    fragment ArbolTech_topics on TopicConnection {
      edges {
        node {
          id
          type
          ...Topic_topic
        }
      }
    }
  `,
});

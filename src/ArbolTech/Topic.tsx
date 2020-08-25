import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useHistory } from "react-router-dom";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Topic_topic } from "./__generated__/Topic_topic.graphql";
import UpdateCurrentTopic from "../UpdateCurrentTopic";
import enviroment from "../relayConfiguration";
import UpdateLocalCurrentTopic from "../UpdateLocalCurrentTopic";
import environment from "../relayConfiguration";

interface IProps {
  index: number;
  saved: number;
  current: number;
  total: number;
  backgroundColor: string;
  previousCompleted: boolean;
  savedPreviousCompleted: boolean;
  topic: Topic_topic;
}

const Topic: React.FC<IProps> = ({
  index,
  saved,
  current,
  total,
  backgroundColor,
  previousCompleted,
  savedPreviousCompleted,
  topic: { id, name, step, url },
}) => {
  const history = useHistory();
  const start = 283 - Math.round((saved / total) * 283);
  const [props, set] = useSpring(() => ({
    x: start,
    config: { duration: 750 },
  }));
  const startLine = savedPreviousCompleted ? 0 : 54;
  const [propsLine, setLine] = useSpring(() => ({
    x: startLine,
    config: { duration: 750 },
  }));
  useEffect(() => {
    const end = 283 - Math.round((current / total) * 283);
    if (saved === current) return;
    set({ x: end });
    localStorage.setItem(`topic${id}`, String(current));
    if (step === 1) return;
    if (!previousCompleted)
      return localStorage.removeItem(`savedPreviousCompleted${id}`);
    setLine({ x: 0 });
    localStorage.setItem(`savedPreviousCompleted${id}`, "true");
  }, [
    setLine,
    set,
    step,
    previousCompleted,
    savedPreviousCompleted,
    current,
    total,
    id,
    saved,
  ]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: backgroundColor,
        alignItems: "center",
        justifyContent: "center",
        height: 150,
      }}
    >
      <div
        onClick={() => {
          history.push("/moduloencurso");
          UpdateCurrentTopic.commit(enviroment, index);
          UpdateLocalCurrentTopic.commitLocal(environment, index);
        }}
        style={{
          position: "relative",
          marginLeft: 50,
          height: 100,
          display: "flex",
          cursor: "pointer",
        }}
      >
        <animated.svg
          fill="transparent"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          strokeDashoffset={props.x}
          strokeWidth="10"
          stroke="#239b56"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="283"
          style={{ zIndex: 10 }}
        >
          <circle
            r="45"
            cx="50%"
            cy="50"
            fill="transparent"
            strokeDasharray="283"
            strokeDashoffset="0"
            stroke="white"
            strokeWidth="10"
          />
          <circle r="45" cx="50%" cy="50" fill="transparent" />
          <image
            href={url}
            height="50"
            width="50"
            x="50"
            y="50"
            transform="translate(-25,-25)"
          />
        </animated.svg>
        {step !== 1 && (
          <animated.svg
            height="54"
            width="10"
            style={{ position: "absolute", top: -52, left: 45 }}
            viewBox="0 0 10 54"
            stroke="#239b56"
            strokeWidth="10"
            strokeDasharray="54"
            strokeDashoffset={propsLine.x}
          >
            <line
              x1="50%"
              y1="0"
              x2="50%"
              y2="54"
              stroke="white"
              fill="transparent"
              strokeDasharray="54"
              strokeDashoffset="0"
              strokeWidth="10"
            />
            <line x1="50%" y1="0" x2="50%" y2="54" />
          </animated.svg>
        )}
      </div>
      <div
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginLeft: 20,
          width: 120,
        }}
      >
        {name}
      </div>
    </div>
  );
};

export default createFragmentContainer(Topic, {
  topic: graphql`
    fragment Topic_topic on Topic {
      id
      step
      name
      url
      type
    }
  `,
});

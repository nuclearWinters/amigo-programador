import React, { useState } from "react";
import styles from "./ArbolTech.module.scss";
import reactLogo from "../imgs/React.svg";
import play from "../imgs/Play-2.svg";
import herramientas from "../imgs/Code.svg";
import html from "../imgs/Html.svg";
import css from "../imgs/Css.svg";
import javascript from "../imgs/Javascript.svg";
import node from "../imgs/Node.svg";
import express from "../imgs/Express.svg";
import mongodb from "../imgs/Mongodb.svg";
import { useHistory } from "react-router-dom";

const ArbolTech = () => {
  let history = useHistory();
  const percentage = (percent: number) => {
    var val = percent;
    var r = 90;
    var c = Math.PI * (r * 2);
    if (val < 0) {
      val = 0;
    }
    if (val > 100) {
      val = 100;
    }
    var pct = ((100 - val) / 100) * c;
    return pct;
  };
  const percentageLine = (percent: number) => {
    if (percent === 0) {
      return 200;
    } else if (percent === 100) {
      return 0;
    }
  };
  let [percentageStart, setPercentageStart] = useState(percentage(10));
  let [percentageStartLine, setPercentageStartLine] = useState(
    percentageLine(0)
  );
  let [percentageTools, setPercentageTools] = useState(percentage(20));
  let [percentageHTML, setPercentageHTML] = useState(percentage(30));
  let [percentageCSS, setPercentageCSS] = useState(percentage(40));
  let [percentageJS, setPercentageJS] = useState(percentage(50));
  let [percentageReact, setPercentageReact] = useState(percentage(60));
  let [percentageNode, setPercentageNode] = useState(percentage(70));
  let [percentageExpress, setPercentageExpress] = useState(percentage(80));
  let [percentageMongodb, setPercentageMongodb] = useState(percentage(90));
  return (
    <div>
      <div>Árbol Tech</div>
      <svg
        style={{ borderWidth: 2, borderColor: "black", borderStyle: "solid" }}
        width="500"
        height="2000"
        viewBox="0 0 1000 4000"
      >
        <rect
          width="1000"
          height="2270"
          style={{
            fill: "rgb(150,225,255)",
          }}
        />
        <rect
          y="2270"
          width="1000"
          height="2270"
          style={{
            fill: "rgb(255, 182, 150)",
          }}
        />
        <line
          x1="0"
          y1="2270"
          x2="1000"
          y2="2270"
          className={styles.line}
        ></line>
        <text
          x="620"
          y="180"
          dominantBaseline="middle"
          fontFamily="Verdana"
          fontSize="55"
          className={styles.frontend}
        >
          Inicio Rápido
        </text>
        <line x1="50%" y1="270" x2="50%" y2="470" className={styles.line} />
        <line
          x1="50%"
          y1="270"
          x2="50%"
          y2="470"
          className={styles.lineAfter}
          strokeDasharray="200"
          strokeDashoffset={percentageStartLine}
        />
        <circle
          className={styles.circle}
          r="90"
          cx="50%"
          cy="180"
          fill="transparent"
          strokeDasharray="565.48"
          strokeDashoffset="0"
        ></circle>
        <circle
          className={styles.loading}
          r="90"
          cx="50%"
          cy="180"
          fill="transparent"
          strokeDasharray="565.48"
          strokeDashoffset={percentageStart}
        ></circle>
        <image
          onClick={() => {
            //setPercentageStart(percentage(100));
            //setPercentageStartLine(percentageLine(100));
            history.push("/ArbolTech/InicioRapido");
          }}
          href={play}
          height="100"
          width="100"
          x="50%"
          y="180"
          transform="translate(-40,-50)"
        />
        <text
          x="620"
          y="560"
          dominantBaseline="middle"
          fontFamily="Verdana"
          fontSize="55"
          className={styles.frontend}
        >
          Herramientas
        </text>
        <line x1="50%" y1="650" x2="50%" y2="850" className={styles.line} />
        <circle
          className={styles.circle}
          r="90"
          cx="50%"
          cy="560"
          fill="transparent"
          strokeDasharray="565.48"
          strokeDashoffset="0"
        ></circle>
        <circle
          className={styles.loading}
          r="90"
          cx="50%"
          cy="560"
          fill="transparent"
          strokeDasharray="565.48"
          strokeDashoffset={percentageTools}
        ></circle>
        <image
          href={herramientas}
          height="120"
          width="120"
          x="50%"
          y="560"
          transform="translate(-60,-60)"
        />
        <text
          x="620"
          y="940"
          dominantBaseline="middle"
          fontFamily="Verdana"
          fontSize="55"
          className={styles.frontend}
        >
          HTML
        </text>
        <line x1="50%" y1="1030" x2="50%" y2="1230" className={styles.line} />
        <circle
          className={styles.circle}
          r="90"
          cx="50%"
          cy="940"
          fill="transparent"
          strokeDasharray="565.48"
          strokeDashoffset="0"
        ></circle>
        <circle
          className={styles.loading}
          r="90"
          cx="50%"
          cy="940"
          fill="transparent"
          strokeDasharray="565.48"
          strokeDashoffset={percentageHTML}
        ></circle>
        <image
          href={html}
          height="120"
          width="120"
          x="50%"
          y="940"
          transform="translate(-60,-50)"
        />
        <text
          x="620"
          y="1320"
          dominantBaseline="middle"
          fontFamily="Verdana"
          fontSize="55"
          className={styles.frontend}
        >
          CSS
        </text>
        <line x1="50%" y1="1410" x2="50%" y2="1610" className={styles.line} />
        <circle
          className={styles.circle}
          r="90"
          cx="50%"
          cy="1320"
          fill="transparent"
          strokeDasharray="565.48"
          strokeDashoffset="0"
        ></circle>
        <circle
          className={styles.loading}
          r="90"
          cx="50%"
          cy="1320"
          fill="transparent"
          strokeDasharray="565.48"
          strokeDashoffset={percentageCSS}
        ></circle>
        <image
          href={css}
          height="120"
          width="120"
          x="50%"
          y="1320"
          transform="translate(-60,-50)"
        />
        <text
          x="620"
          y="1700"
          dominantBaseline="middle"
          fontFamily="Verdana"
          fontSize="55"
          className={styles.frontend}
        >
          JavaScript
        </text>
        <line x1="50%" y1="1790" x2="50%" y2="1990" className={styles.line} />
        <circle
          className={styles.circle}
          r="90"
          cx="50%"
          cy="1700"
          fill="transparent"
          strokeDasharray="565.48"
          strokeDashoffset="0"
        ></circle>
        <circle
          className={styles.loading}
          r="90"
          cx="50%"
          cy="1700"
          fill="transparent"
          strokeDasharray="565.48"
          strokeDashoffset={percentageJS}
        ></circle>
        <image
          href={javascript}
          height="150"
          width="150"
          x="50%"
          y="1700"
          transform="translate(-75,-65)"
        />
        <text
          x="620"
          y="2080"
          dominantBaseline="middle"
          fontFamily="Verdana"
          fontSize="55"
          className={styles.frontend}
        >
          React
        </text>
        <line x1="50%" y1="2170" x2="50%" y2="2370" className={styles.line} />
        <circle
          className={styles.circle}
          r="90"
          cx="50%"
          cy="2080"
          fill="transparent"
          strokeDasharray="565.48"
          strokeDashoffset="0"
        ></circle>
        <circle
          className={styles.loading}
          r="90"
          cx="50%"
          cy="2080"
          fill="transparent"
          strokeDasharray="565.48"
          strokeDashoffset={percentageReact}
        ></circle>
        <image
          href={reactLogo}
          height="180"
          width="180"
          x="50%"
          y="2080"
          transform="translate(-90,-90)"
        />
        <text
          x="620"
          y="2460"
          dominantBaseline="middle"
          fontFamily="Verdana"
          fontSize="55"
          className={styles.backend}
        >
          Node
        </text>
        <line x1="50%" y1="2550" x2="50%" y2="2750" className={styles.line} />
        <circle
          className={styles.circle}
          r="90"
          cx="50%"
          cy="2460"
          fill="transparent"
          strokeDasharray="565.48"
          strokeDashoffset="0"
        ></circle>
        <circle
          className={styles.loading}
          r="90"
          cx="50%"
          cy="2460"
          fill="transparent"
          strokeDasharray="565.48"
          strokeDashoffset={percentageNode}
        ></circle>
        <image
          href={node}
          height="140"
          width="140"
          x="50%"
          y="2460"
          transform="translate(-70,-70)"
        />
        <text
          x="620"
          y="2840"
          dominantBaseline="middle"
          fontFamily="Verdana"
          fontSize="55"
          className={styles.backend}
        >
          Express
        </text>
        <line x1="50%" y1="2930" x2="50%" y2="3130" className={styles.line} />
        <circle
          className={styles.circle}
          r="90"
          cx="50%"
          cy="2840"
          fill="transparent"
          strokeDasharray="565.48"
          strokeDashoffset="0"
        ></circle>
        <circle
          className={styles.loading}
          r="90"
          cx="50%"
          cy="2840"
          fill="transparent"
          strokeDasharray="565.48"
          strokeDashoffset={percentageExpress}
        ></circle>
        <image
          href={express}
          height="140"
          width="140"
          x="50%"
          y="2840"
          transform="translate(-70,-70)"
        />
        <text
          x="620"
          y="3220"
          dominantBaseline="middle"
          fontFamily="Verdana"
          fontSize="55"
          className={styles.backend}
        >
          MongoDB
        </text>
        <circle
          className={styles.circle}
          r="90"
          cx="50%"
          cy="3220"
          fill="transparent"
          strokeDasharray="565.48"
          strokeDashoffset="0"
        ></circle>
        <circle
          className={styles.loading}
          r="90"
          cx="50%"
          cy="3220"
          fill="transparent"
          strokeDasharray="565.48"
          strokeDashoffset={percentageMongodb}
        ></circle>
        <image
          href={mongodb}
          height="140"
          width="140"
          x="50%"
          y="3220"
          transform="translate(-70,-70)"
        />
      </svg>
    </div>
  );
};

export default ArbolTech;

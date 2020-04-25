import React from "react";
import styles from "./TopBar.module.scss";

const TopBar: React.FC = props => {
  return <div className={styles.Bar}>{props.children}</div>;
};

export default TopBar;

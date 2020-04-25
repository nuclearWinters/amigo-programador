import React from "react";
import styles from "./LinkOption.module.scss";
import { Link } from "react-router-dom";

interface LinkOptionProps {
  title: string;
  link: string;
}

const LinkOption: React.FC<LinkOptionProps> = props => {
  return (
    <Link to={props.link} className={styles.option}>
      {props.title}
    </Link>
  );
};

export default LinkOption;

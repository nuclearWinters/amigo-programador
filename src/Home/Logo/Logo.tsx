import React from "react";
import logo from "../../imgs/logo.png";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logoBox}>
      <img src={logo} className={styles.logo} alt="" />
    </div>
  );
};

export default Logo;

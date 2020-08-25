import React from "react";
import { Link, useLocation } from "react-router-dom";

interface LinkOptionProps {
  title: string;
  link: string;
}

const LinkOption: React.FC<LinkOptionProps> = (props) => {
  const location = useLocation();
  return (
    <Link
      to={props.link}
      style={{
        fontSize: 18,
        padding: "0px 16px",
        textAlign: "center",
        fontWeight: "normal",
        color:
          location.pathname === props.link ? "rgba(44, 146, 219, 0.9)" : "gray",
        textDecoration: "none",
      }}
    >
      {props.title}
    </Link>
  );
};

export default LinkOption;

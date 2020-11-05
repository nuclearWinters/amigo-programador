import { BaseButton } from "./BaseButton";
import React, { CSSProperties, FC } from "react";

interface IProps {
  onClick: () => void;
}

export const RegistrarButton: FC<IProps> = ({ onClick }) => {
  return (
    <BaseButton onClick={onClick} style={container} text={"Registrarse"} />
  );
};

const { container }: { [argName: string]: CSSProperties } = {
  container: {
    marginLeft: 20,
    cursor: "pointer",
    color: "rgb(255,255,255)",
    fontSize: 18,
    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 6,
    paddingBottom: 6,
    textAlign: "center",
    textDecoration: "none",
    backgroundColor: "#2c92db",
    borderRadius: 30,
    boxShadow: "1px 2px 5px #888888",
    fontWeight: "bold",
    letterSpacing: 1,
  },
};

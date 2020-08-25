import React, { useState } from "react";
import WrapperFocus from "./InicioRapido/WrapperFocus";

interface IProps {
  toggle: () => void;
  title: string;
  mainColor: string;
  buttonTitle: string;
  onSubmit: (name: string, password: string, email: string) => void;
}

const Modal: React.FC<IProps> = ({
  toggle,
  title,
  mainColor,
  buttonTitle,
  onSubmit,
}) => {
  const [focusNombre, setFocusNombre] = useState(false);
  const [focusContraseña, setFocusContraseña] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [focusEmail, setFocusEmail] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        zIndex: 1,
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        overflow: "auto",
        backgroundColor: "rgba(0,0,0,0.4)",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <WrapperFocus
        style={{
          height: "300px",
          width: "300px",
          display: "flex",
          backgroundColor: "white",
          borderRadius: "30px",
          alignItems: "center",
          flexDirection: "column",
        }}
        toggle={toggle}
      >
        <div
          style={{
            fontSize: 24,
            color: mainColor,
            fontWeight: "bold",
            letterSpacing: 1,
            marginTop: 24,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {title === "REGISTRARSE" && (
            <input
              value={name}
              onFocus={() => {
                setFocusNombre(true);
              }}
              onBlur={() => {
                setFocusNombre(false);
              }}
              placeholder="Nombre"
              style={{
                width: 240,
                padding: "10px 14px",
                color: "rgb(0,0,0)",
                borderColor: focusNombre ? "#0791e6" : "rgba(0,0,0,0.2)",
                borderRadius: 4,
                borderWidth: 1,
                outline: "none",
                outlineOffset: 0,
                fontSize: 18,
              }}
              onChange={(event) => setName(event.target.value)}
            />
          )}
          <input
            value={email}
            onFocus={() => {
              setFocusEmail(true);
            }}
            onBlur={() => {
              setFocusEmail(false);
            }}
            placeholder="Email"
            style={{
              marginTop: 12,
              width: 240,
              padding: "10px 14px",
              color: "rgb(0,0,0)",
              borderColor: focusEmail ? "#0791e6" : "rgba(0,0,0,0.2)",
              borderRadius: 4,
              borderWidth: 1,
              outline: "none",
              outlineOffset: 0,
              fontSize: 18,
            }}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            value={password}
            placeholder="Contraseña"
            onFocus={() => {
              setFocusContraseña(true);
            }}
            onBlur={() => {
              setFocusContraseña(false);
            }}
            style={{
              marginTop: 12,
              width: 240,
              padding: "10px 14px",
              color: "rgb(0,0,0)",
              borderColor: focusContraseña ? "#0791e6" : "rgba(0,0,0,0.2)",
              borderRadius: 4,
              borderWidth: 1,
              outline: "none",
              outlineOffset: 0,
              fontSize: 18,
            }}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div
          onClick={() => {
            onSubmit(name, password, email);
          }}
          style={{
            borderRadius: 6,
            backgroundColor: mainColor,
            width: "80%",
            textAlign: "center",
            padding: "10px 10px",
            color: "white",
            fontWeight: "bold",
            boxShadow: "0 1px 1px 0 #58902d",
            marginBottom: 36,
          }}
        >
          {buttonTitle}
        </div>
      </WrapperFocus>
    </div>
  );
};

export default Modal;

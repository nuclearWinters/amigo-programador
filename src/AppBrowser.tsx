import React, { useState, useCallback } from "react";
import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopBar from "./Home/TopBar";
import Logo from "./Home/Logo";
import LinkOption from "./Home/LinkOption";
import Nosotros from "./Nosotros";
import { ArbolTech } from "./ArbolTech";
import InicioRapido from "./InicioRapido";
import graphql from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import enviroment from "./relayConfiguration";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import {
  IngresarButton,
  RegistrarButton,
  Modal,
  FormInput,
  IniciarButton,
  RegistrarseButton,
} from "./components";
import { AppBrowser_user } from "./__generated__/AppBrowser_user.graphql";

interface IProps {
  user: AppBrowser_user;
  retry: (id: string) => void;
}

const AppBrowser: React.FC<IProps> = ({ user, retry }) => {
  const [showIngresar, setShowIngresar] = useState(false);
  const [showRegistrarse, setShowRegistrarse] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dismissModal = () => {
    setShowIngresar(false);
    setShowRegistrarse(false);
    setEmail("");
    setPassword("");
    setUsername("");
  };
  const handleInputsByName = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "Email":
        return setEmail(event.target.value);

      case "Username":
        return setUsername(event.target.value);
      default:
        return setPassword(event.target.value);
    }
  };
  const submitRegistrar = () => {
    SignUp.commit(enviroment, username, password, retry, email);
  };
  const submitIngresar = () => {
    SignIn.commit(enviroment, password, retry, email);
  };
  const onClickIngresar = useCallback(() => {
    setShowIngresar(true);
  }, []);
  const onClickRegistrarse = useCallback(() => {
    setShowRegistrarse(true);
  }, []);
  return (
    <BrowserRouter>
      <TopBar>
        <Logo />
        <LinkOption title="Inicio" link="/" />
        <LinkOption title="Árbol Tech" link="/arboltech" />
        <LinkOption title="Módulo en curso" link="/moduloencurso" />
        <Logo />
        <div>
          {!user.username ? (
            <div style={{ flexDirection: "row", display: "flex" }}>
              <IngresarButton onClick={onClickIngresar} />
              <RegistrarButton onClick={onClickRegistrarse} />
            </div>
          ) : (
            <>
              <div>{user.username}</div>
              <div
                onClick={() => {
                  localStorage.removeItem("refreshToken");
                  localStorage.removeItem("accessToken");
                  retry("");
                }}
              >
                Cerrar sesión
              </div>
            </>
          )}
        </div>
        {showIngresar && (
          <Modal toggle={dismissModal}>
            <div
              style={{
                fontSize: 24,
                color: "#1bbc9b",
                fontWeight: "bold",
                letterSpacing: 1,
                marginTop: 24,
              }}
            >
              INGRESAR
            </div>
            <FormInput
              placeholder="Email"
              onChange={handleInputsByName}
              value={email}
            />
            <FormInput
              placeholder="Password"
              onChange={handleInputsByName}
              value={password}
            />
            <IniciarButton onClick={submitIngresar} />
          </Modal>
        )}
        {showRegistrarse && (
          <Modal toggle={dismissModal}>
            <div
              style={{
                fontSize: 24,
                color: "#2c92db",
                fontWeight: "bold",
                letterSpacing: 1,
                marginTop: 24,
              }}
            >
              REGISTRARSE
            </div>
            <FormInput
              placeholder="Username"
              onChange={handleInputsByName}
              value={username}
            />
            <FormInput
              placeholder="Email"
              onChange={handleInputsByName}
              value={email}
            />
            <FormInput
              placeholder="Password"
              onChange={handleInputsByName}
              value={password}
            />
            <RegistrarseButton onClick={submitRegistrar} />
          </Modal>
        )}
      </TopBar>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/nosotros" exact component={Nosotros} />
        <Route
          path="/arboltech"
          exact
          render={(props) => <ArbolTech {...props} id={user.id} />}
        />
        <Route
          path="/moduloencurso"
          exact
          render={(props) => (
            <InicioRapido {...props} user={user} id={user.id} />
          )}
        />
        <Route path="/" render={() => <div>404</div>} />
      </Switch>
    </BrowserRouter>
  );
};

export default createFragmentContainer(AppBrowser, {
  user: graphql`
    fragment AppBrowser_user on User {
      id
      username
      ...InicioRapido_user
    }
  `,
});

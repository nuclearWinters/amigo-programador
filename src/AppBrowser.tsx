import React, { useState } from "react";
import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopBar from "./Home/TopBar";
import Logo from "./Home/Logo";
import LinkOption from "./Home/LinkOption";
import Nosotros from "./Nosotros";
import ArbolTech from "./ArbolTech";
import InicioRapido from "./InicioRapido";
import graphql from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import Modal from "./Modal";
import enviroment from "./relayConfiguration";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const AppBrowser: React.FC<{ user: any; retry: (id: string) => void }> = ({
  user,
  retry,
}) => {
  const [showIngresar, setShowIngresar] = useState(false);
  const [showRegistrarse, setShowRegistrarse] = useState(false);
  const showIngresarFunc = () => {
    setShowIngresar(false);
  };
  const showRegistrarseFunc = () => {
    setShowRegistrarse(false);
  };
  const submitRegistrar = (name: string, password: string, email: string) => {
    SignUp.commit(enviroment, name, password, retry, email);
  };
  const submitIngresar = (name: string, password: string, email: string) => {
    SignIn.commit(enviroment, password, retry, email);
  };
  return (
    <BrowserRouter>
      <TopBar>
        <Logo />
        <LinkOption title="Inicio" link="/" />
        <LinkOption title="Árbol Tech" link="/arboltech" />
        <LinkOption title="Módulo en curso" link="/moduloencurso" />
        <Logo />
        <div>
          {!user.name ? (
            <div style={{ flexDirection: "row", display: "flex" }}>
              <div
                style={{
                  cursor: "pointer",
                  color: "rgb(255,255,255)",
                  fontSize: 18,
                  paddingLeft: 22,
                  paddingRight: 22,
                  paddingTop: 6,
                  paddingBottom: 6,
                  textAlign: "center",
                  textDecoration: "none",
                  backgroundColor: "#1bbc9b",
                  borderRadius: 30,
                  boxShadow: "1px 2px 5px #888888",
                  fontWeight: "bold",
                  letterSpacing: 1,
                }}
                onClick={() => {
                  setShowIngresar(true);
                }}
              >
                Ingresar
              </div>
              <div
                onClick={() => {
                  setShowRegistrarse(true);
                }}
                style={{
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
                }}
              >
                Registrarse
              </div>
            </div>
          ) : (
            <>
              <div>{user.name}</div>
              <div
                onClick={() => {
                  localStorage.removeItem("token");
                  retry("");
                }}
              >
                Cerrar sesión
              </div>
            </>
          )}
        </div>
        {showIngresar && (
          <Modal
            title={"INGRESAR"}
            buttonTitle={"Iniciar sesión"}
            mainColor={"#1bbc9b"}
            toggle={showIngresarFunc}
            onSubmit={submitIngresar}
          />
        )}
        {showRegistrarse && (
          <Modal
            title={"REGISTRARSE"}
            buttonTitle={"Registrarse"}
            mainColor={"#2c92db"}
            toggle={showRegistrarseFunc}
            onSubmit={submitRegistrar}
          />
        )}
      </TopBar>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/nosotros" exact component={Nosotros} />
        <Route
          path="/arboltech"
          exact
          render={(props) => <ArbolTech {...props} topics={user.topics} />}
        />
        {
          <Route
            path="/moduloencurso"
            exact
            render={(props) => <InicioRapido {...props} user={user} />}
          />
        }
        <Route path="/" render={() => <div>404</div>} />
      </Switch>
    </BrowserRouter>
  );
};

export default createFragmentContainer(AppBrowser, {
  user: graphql`
    fragment AppBrowser_user on User {
      id
      name
      topics {
        ...ArbolTech_topics
      }
      ...InicioRapido_user
    }
  `,
});

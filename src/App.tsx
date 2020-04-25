import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopBar from "./Home/TopBar";
import Logo from "./Home/Logo";
import LinkOption from "./Home/LinkOption";
import Nosotros from "./Nosotros";
import ArbolTech from "./ArbolTech";
import InicioRapido from "./InicioRapido";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <TopBar>
        <Logo />
        <LinkOption title="Inicio" link="/" />
        <LinkOption title="Árbol Tech" link="/arboltech" />
        <LinkOption title="Módulo en curso" link="/" />
        <Logo />
      </TopBar>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/nosotros" exact component={Nosotros} />
        <Route path="/arboltech" exact component={ArbolTech} />
        <Route path="/arboltech/iniciorapido" exact component={InicioRapido} />
        <Route path="/" render={() => <div>404</div>} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

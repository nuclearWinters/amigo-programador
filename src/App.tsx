import React, { useState } from "react";
import "./App.css";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "./relayConfiguration";
import AppBrowser from "./AppBrowser";
import { AppQuery } from "./__generated__/AppQuery.graphql";
import jwtDecode from "jwt-decode";

interface IJWT {
  id: string;
}

const App: React.FC = () => {
  const getIdFromToken = (): string => {
    const token = localStorage.getItem("token");
    if (!token) return "";
    return jwtDecode<IJWT>(token).id;
  };
  const [id, setId] = useState<string>(getIdFromToken());
  return (
    <QueryRenderer<AppQuery>
      environment={environment}
      query={graphql`
        query AppQuery($id: String!) {
          user(id: $id) {
            ...AppBrowser_user
          }
        }
      `}
      variables={{
        id,
      }}
      render={({ error, props }) => {
        if (props && props.user) {
          return (
            <AppBrowser user={props.user} retry={(id: string) => setId(id)} />
          );
        } else if (error) {
          return <div>{error.message}</div>;
        }
        return <div>Loading</div>;
      }}
    />
  );
};

export default App;

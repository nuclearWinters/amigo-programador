import React, { useState } from "react";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "./relayConfiguration";
import AppBrowser from "./AppBrowser";
import { AppQuery } from "./__generated__/AppQuery.graphql";
import jwtDecode from "jwt-decode";
import { Provider } from "react-redux";
import { store } from "./Redux";

interface IJWT {
  _id: string;
}

const App: React.FC = () => {
  const getIdFromToken = (): string => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) return "";
    return jwtDecode<IJWT>(accessToken)._id;
  };
  const getRefreshToken = (): string => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) return "";
    return refreshToken;
  };
  const [id, setId] = useState<string>(getIdFromToken());
  const [refreshToken] = useState<string>(getRefreshToken());
  return (
    <QueryRenderer<AppQuery>
      environment={environment}
      query={graphql`
        query AppQuery($id: String!, $refreshToken: String!) {
          user(id: $id, refreshToken: $refreshToken) {
            ...AppBrowser_user
          }
        }
      `}
      variables={{
        id,
        refreshToken,
      }}
      render={({ error, props }) => {
        if (props && props.user) {
          return (
            <Provider store={store}>
              <AppBrowser user={props.user} retry={(id: string) => setId(id)} />
            </Provider>
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

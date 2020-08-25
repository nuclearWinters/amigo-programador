import { Environment, Network, RecordSource, Store } from "relay-runtime";

const fetchQuery = async (operation: any, variables: any) => {
  const getToken = (): string => {
    const token = localStorage.getItem("token");
    if (!token) return "";
    return token;
  };
  return fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: getToken(),
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
};

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;

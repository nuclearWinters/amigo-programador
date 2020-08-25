/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type SignUpMutationVariables = {
    name: string;
    password: string;
    email: string;
};
export type SignUpMutationResponse = {
    readonly SignUp: string;
};
export type SignUpMutation = {
    readonly response: SignUpMutationResponse;
    readonly variables: SignUpMutationVariables;
};



/*
mutation SignUpMutation(
  $name: String!
  $password: String!
  $email: String!
) {
  SignUp(name: $name, password: $password, email: $email)
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name",
    "type": "String!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "password",
    "type": "String!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "email",
    "type": "String!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
      },
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      },
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password"
      }
    ],
    "kind": "ScalarField",
    "name": "SignUp",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SignUpMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SignUpMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "SignUpMutation",
    "operationKind": "mutation",
    "text": "mutation SignUpMutation(\n  $name: String!\n  $password: String!\n  $email: String!\n) {\n  SignUp(name: $name, password: $password, email: $email)\n}\n"
  }
};
})();
(node as any).hash = '9366bd6d8027f69441a375bddda17732';
export default node;

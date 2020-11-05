/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type UpdateCurrentModuleInput = {
    name: string;
    refreshToken: string;
    moduleIndex: number;
    clientMutationId?: string | null;
};
export type UpdateCurrentModuleMutationVariables = {
    input: UpdateCurrentModuleInput;
};
export type UpdateCurrentModuleMutationResponse = {
    readonly updateCurrentModule: {
        readonly module: number;
    };
};
export type UpdateCurrentModuleMutation = {
    readonly response: UpdateCurrentModuleMutationResponse;
    readonly variables: UpdateCurrentModuleMutationVariables;
};



/*
mutation UpdateCurrentModuleMutation(
  $input: UpdateCurrentModuleInput!
) {
  updateCurrentModule(input: $input) {
    module
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateCurrentModuleInput!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateCurrentModulePayload",
    "kind": "LinkedField",
    "name": "updateCurrentModule",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "module",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateCurrentModuleMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateCurrentModuleMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "UpdateCurrentModuleMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateCurrentModuleMutation(\n  $input: UpdateCurrentModuleInput!\n) {\n  updateCurrentModule(input: $input) {\n    module\n  }\n}\n"
  }
};
})();
(node as any).hash = '2555ede85434318509d2d26a5a4ef38e';
export default node;

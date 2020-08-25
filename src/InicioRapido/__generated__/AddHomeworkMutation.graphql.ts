/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type AddHomeworkInput = {
    file: string;
    clientMutationId?: string | null;
};
export type AddHomeworkMutationVariables = {
    file: AddHomeworkInput;
};
export type AddHomeworkMutationResponse = {
    readonly addHomework: {
        readonly id: string;
    } | null;
};
export type AddHomeworkMutation = {
    readonly response: AddHomeworkMutationResponse;
    readonly variables: AddHomeworkMutationVariables;
};



/*
mutation AddHomeworkMutation(
  $file: AddHomeworkInput!
) {
  addHomework(input: $file) {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "file",
    "type": "AddHomeworkInput!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "file"
      }
    ],
    "concreteType": "AddHomeworkPayload",
    "kind": "LinkedField",
    "name": "addHomework",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
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
    "name": "AddHomeworkMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddHomeworkMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "AddHomeworkMutation",
    "operationKind": "mutation",
    "text": "mutation AddHomeworkMutation(\n  $file: AddHomeworkInput!\n) {\n  addHomework(input: $file) {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '3aaea69ee36679d46086a33f191ed085';
export default node;

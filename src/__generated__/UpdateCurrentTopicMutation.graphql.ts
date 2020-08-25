/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type UpdateCurrentTopicMutationVariables = {
    index: number;
};
export type UpdateCurrentTopicMutationResponse = {
    readonly UpdateCurrentTopic: number;
};
export type UpdateCurrentTopicMutation = {
    readonly response: UpdateCurrentTopicMutationResponse;
    readonly variables: UpdateCurrentTopicMutationVariables;
};



/*
mutation UpdateCurrentTopicMutation(
  $index: Int!
) {
  UpdateCurrentTopic(index: $index)
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "index",
    "type": "Int!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "index",
        "variableName": "index"
      }
    ],
    "kind": "ScalarField",
    "name": "UpdateCurrentTopic",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateCurrentTopicMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateCurrentTopicMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "UpdateCurrentTopicMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateCurrentTopicMutation(\n  $index: Int!\n) {\n  UpdateCurrentTopic(index: $index)\n}\n"
  }
};
})();
(node as any).hash = 'bfe130bd648746ce8f47c3594f968e83';
export default node;

/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type UpdateCurrentTopicInput = {
    refreshToken: string;
    topic: string;
    clientMutationId?: string | null;
};
export type UpdateCurrentTopicMutationVariables = {
    input: UpdateCurrentTopicInput;
};
export type UpdateCurrentTopicMutationResponse = {
    readonly updateCurrentTopic: {
        readonly topic: string;
    };
};
export type UpdateCurrentTopicMutation = {
    readonly response: UpdateCurrentTopicMutationResponse;
    readonly variables: UpdateCurrentTopicMutationVariables;
};



/*
mutation UpdateCurrentTopicMutation(
  $input: UpdateCurrentTopicInput!
) {
  updateCurrentTopic(input: $input) {
    topic
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateCurrentTopicInput!"
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
    "concreteType": "UpdateCurrentTopicPayload",
    "kind": "LinkedField",
    "name": "updateCurrentTopic",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "topic",
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
    "text": "mutation UpdateCurrentTopicMutation(\n  $input: UpdateCurrentTopicInput!\n) {\n  updateCurrentTopic(input: $input) {\n    topic\n  }\n}\n"
  }
};
})();
(node as any).hash = '23aa8a5107fb2787e6d2eb66a1d58d6d';
export default node;

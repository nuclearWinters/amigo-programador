/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type AddCommentOnCommentInput = {
    comment: string;
    name: string;
    created: string;
    idParentComment: string;
    clientMutationId?: string | null;
};
export type AddCommentOnCommentMutationVariables = {
    input: AddCommentOnCommentInput;
};
export type AddCommentOnCommentMutationResponse = {
    readonly addCommentOnComment: {
        readonly commentOnCommentEdge: {
            readonly __typename: string;
            readonly cursor: string;
            readonly node: {
                readonly id: string;
                readonly likes: number;
                readonly comment: string;
                readonly name: string;
                readonly created: string;
                readonly liked: boolean;
            } | null;
        };
    } | null;
};
export type AddCommentOnCommentMutation = {
    readonly response: AddCommentOnCommentMutationResponse;
    readonly variables: AddCommentOnCommentMutationVariables;
};



/*
mutation AddCommentOnCommentMutation(
  $input: AddCommentOnCommentInput!
) {
  addCommentOnComment(input: $input) {
    commentOnCommentEdge {
      __typename
      cursor
      node {
        id
        likes
        comment
        name
        created
        liked
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "AddCommentOnCommentInput!"
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
    "concreteType": "AddCommentOnCommentPayload",
    "kind": "LinkedField",
    "name": "addCommentOnComment",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CommentOnCommentEdge",
        "kind": "LinkedField",
        "name": "commentOnCommentEdge",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "cursor",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "CommentOnComment",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "likes",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "comment",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "created",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "liked",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
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
    "name": "AddCommentOnCommentMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddCommentOnCommentMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "AddCommentOnCommentMutation",
    "operationKind": "mutation",
    "text": "mutation AddCommentOnCommentMutation(\n  $input: AddCommentOnCommentInput!\n) {\n  addCommentOnComment(input: $input) {\n    commentOnCommentEdge {\n      __typename\n      cursor\n      node {\n        id\n        likes\n        comment\n        name\n        created\n        liked\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '7cd069ef5269402c2a51d8d2df42a2dd';
export default node;

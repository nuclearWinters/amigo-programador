/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type AddCommentInput = {
    comment: string;
    name: string;
    created: string;
    clientMutationId?: string | null;
};
export type AddCommentMutationVariables = {
    input: AddCommentInput;
};
export type AddCommentMutationResponse = {
    readonly addComment: {
        readonly commentEdge: {
            readonly __typename: string;
            readonly cursor: string;
            readonly node: {
                readonly id: string;
                readonly likes: number;
                readonly comment: string;
                readonly user_id: string;
                readonly created: string;
                readonly totalSubcomments: number;
            } | null;
        };
    } | null;
};
export type AddCommentMutation = {
    readonly response: AddCommentMutationResponse;
    readonly variables: AddCommentMutationVariables;
};



/*
mutation AddCommentMutation(
  $input: AddCommentInput!
) {
  addComment(input: $input) {
    commentEdge {
      __typename
      cursor
      node {
        id
        likes
        comment
        user_id
        created
        totalSubcomments
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
    "type": "AddCommentInput!"
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
    "concreteType": "AddCommentPayload",
    "kind": "LinkedField",
    "name": "addComment",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CommentEdge",
        "kind": "LinkedField",
        "name": "commentEdge",
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
            "concreteType": "Comment",
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
                "name": "user_id",
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
                "name": "totalSubcomments",
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
    "name": "AddCommentMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddCommentMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "AddCommentMutation",
    "operationKind": "mutation",
    "text": "mutation AddCommentMutation(\n  $input: AddCommentInput!\n) {\n  addComment(input: $input) {\n    commentEdge {\n      __typename\n      cursor\n      node {\n        id\n        likes\n        comment\n        user_id\n        created\n        totalSubcomments\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b412f4ea6be7d8a899dfd7701c09cba5';
export default node;

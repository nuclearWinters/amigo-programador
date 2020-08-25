/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AppQueryVariables = {
    id: string;
};
export type AppQueryResponse = {
    readonly user: {
        readonly " $fragmentRefs": FragmentRefs<"AppBrowser_user">;
    } | null;
};
export type AppQuery = {
    readonly response: AppQueryResponse;
    readonly variables: AppQueryVariables;
};



/*
query AppQuery(
  $id: String!
) {
  user(id: $id) {
    ...AppBrowser_user
    id
  }
}

fragment AppBrowser_user on User {
  id
  name
  topics {
    ...ArbolTech_topics
  }
  ...InicioRapido_user
}

fragment ArbolTech_topics on TopicConnection {
  edges {
    node {
      id
      type
      ...Topic_topic
    }
  }
}

fragment InicioRapido_user on User {
  currentTopic
  currentModule
  topics {
    edges {
      node {
        id
        step
        name
        url
        type
        modules {
          edges {
            node {
              title
              description
              thumbnail
            }
          }
        }
      }
    }
  }
}

fragment Topic_topic on Topic {
  id
  step
  name
  url
  type
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id",
    "type": "String!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AppBrowser_user"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "TopicConnection",
            "kind": "LinkedField",
            "name": "topics",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "TopicEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Topic",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "type",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "step",
                        "storageKey": null
                      },
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "url",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ModulesConnection",
                        "kind": "LinkedField",
                        "name": "modules",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "ModulesEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Modules",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "title",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "description",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "thumbnail",
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
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "currentTopic",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "currentModule",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery(\n  $id: String!\n) {\n  user(id: $id) {\n    ...AppBrowser_user\n    id\n  }\n}\n\nfragment AppBrowser_user on User {\n  id\n  name\n  topics {\n    ...ArbolTech_topics\n  }\n  ...InicioRapido_user\n}\n\nfragment ArbolTech_topics on TopicConnection {\n  edges {\n    node {\n      id\n      type\n      ...Topic_topic\n    }\n  }\n}\n\nfragment InicioRapido_user on User {\n  currentTopic\n  currentModule\n  topics {\n    edges {\n      node {\n        id\n        step\n        name\n        url\n        type\n        modules {\n          edges {\n            node {\n              title\n              description\n              thumbnail\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment Topic_topic on Topic {\n  id\n  step\n  name\n  url\n  type\n}\n"
  }
};
})();
(node as any).hash = '4047a14cb1f5c187a699551a73d13e6b';
export default node;

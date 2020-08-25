/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type InicioRapido_user = {
    readonly currentTopic: number;
    readonly currentModule: number;
    readonly topics: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly step: number;
                readonly name: string;
                readonly url: string;
                readonly type: string;
                readonly modules: {
                    readonly edges: ReadonlyArray<{
                        readonly node: {
                            readonly title: string;
                            readonly description: string;
                            readonly thumbnail: string;
                        } | null;
                    } | null> | null;
                };
            } | null;
        } | null> | null;
    };
    readonly " $refType": "InicioRapido_user";
};
export type InicioRapido_user$data = InicioRapido_user;
export type InicioRapido_user$key = {
    readonly " $data"?: InicioRapido_user$data;
    readonly " $fragmentRefs": FragmentRefs<"InicioRapido_user">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "InicioRapido_user",
  "selections": [
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
    },
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
                  "name": "step",
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
                  "name": "url",
                  "storageKey": null
                },
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
    }
  ],
  "type": "User"
};
(node as any).hash = 'a6948addadc1f8d6a437f65dbc925395';
export default node;

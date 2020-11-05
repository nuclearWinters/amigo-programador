/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type InicioRapido_user = {
    readonly currentModules: {
        readonly QuickStart: number;
        readonly HTML: number;
        readonly CSS: number;
        readonly Javascript: number;
        readonly React: number;
        readonly Node: number;
        readonly Express: number;
        readonly MongoDB: number;
    };
    readonly currentTopic: string;
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
      "concreteType": "CurrentModules",
      "kind": "LinkedField",
      "name": "currentModules",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "QuickStart",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "HTML",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "CSS",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "Javascript",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "React",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "Node",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "Express",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "MongoDB",
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
    }
  ],
  "type": "User"
};
(node as any).hash = '01a68c4d32a4f657daaf2a683df244cd';
export default node;

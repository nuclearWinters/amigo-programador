/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AppBrowser_user = {
    readonly id: string;
    readonly name: string;
    readonly topics: {
        readonly " $fragmentRefs": FragmentRefs<"ArbolTech_topics">;
    };
    readonly " $fragmentRefs": FragmentRefs<"InicioRapido_user">;
    readonly " $refType": "AppBrowser_user";
};
export type AppBrowser_user$data = AppBrowser_user;
export type AppBrowser_user$key = {
    readonly " $data"?: AppBrowser_user$data;
    readonly " $fragmentRefs": FragmentRefs<"AppBrowser_user">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppBrowser_user",
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
      "name": "name",
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "ArbolTech_topics"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "InicioRapido_user"
    }
  ],
  "type": "User"
};
(node as any).hash = '7db81f3aa2ac419f4b9fcebd92de1e1e';
export default node;

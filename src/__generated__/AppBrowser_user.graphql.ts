/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AppBrowser_user = {
    readonly id: string;
    readonly username: string;
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
      "name": "username",
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
(node as any).hash = 'ffc3b779ef39887907cc399f4da19c33';
export default node;

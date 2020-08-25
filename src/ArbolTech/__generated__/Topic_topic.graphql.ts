/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Topic_topic = {
    readonly id: string;
    readonly step: number;
    readonly name: string;
    readonly url: string;
    readonly type: string;
    readonly " $refType": "Topic_topic";
};
export type Topic_topic$data = Topic_topic;
export type Topic_topic$key = {
    readonly " $data"?: Topic_topic$data;
    readonly " $fragmentRefs": FragmentRefs<"Topic_topic">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Topic_topic",
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
    }
  ],
  "type": "Topic"
};
(node as any).hash = '5c4b84dcaa6b42cddfd7e97e584518c5';
export default node;

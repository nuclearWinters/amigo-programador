/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ArbolTech_topics = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly id: string;
            readonly type: string;
            readonly " $fragmentRefs": FragmentRefs<"Topic_topic">;
        } | null;
    } | null> | null;
    readonly " $refType": "ArbolTech_topics";
};
export type ArbolTech_topics$data = ArbolTech_topics;
export type ArbolTech_topics$key = {
    readonly " $data"?: ArbolTech_topics$data;
    readonly " $fragmentRefs": FragmentRefs<"ArbolTech_topics">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArbolTech_topics",
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
              "name": "type",
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "Topic_topic"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TopicConnection"
};
(node as any).hash = '299851cf183647149ddf3af86b4a273f';
export default node;

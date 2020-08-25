/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ComentariosDeComentarios_comments = {
    readonly id: string;
    readonly likes: number;
    readonly liked: boolean;
    readonly comment: string;
    readonly created: string;
    readonly name: string;
    readonly idParentComment: string;
    readonly " $refType": "ComentariosDeComentarios_comments";
};
export type ComentariosDeComentarios_comments$data = ComentariosDeComentarios_comments;
export type ComentariosDeComentarios_comments$key = {
    readonly " $data"?: ComentariosDeComentarios_comments$data;
    readonly " $fragmentRefs": FragmentRefs<"ComentariosDeComentarios_comments">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ComentariosDeComentarios_comments",
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
      "name": "liked",
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
      "name": "created",
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
      "name": "idParentComment",
      "storageKey": null
    }
  ],
  "type": "CommentOnComment"
};
(node as any).hash = '54081995c094b36c5541f40a85e47262';
export default node;

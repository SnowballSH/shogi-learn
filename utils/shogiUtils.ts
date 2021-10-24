import { Key } from "chessgroundx/types";

export function toKey(sjsx: number, sjsy: number): Key {
  const res = (String.fromCharCode(9 - sjsx + "a".charCodeAt(0)) +
    (10 - sjsy).toString()) as Key;
  return res;
}

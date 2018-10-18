import { LOAD_DATA } from "./types";

export function loadData(data) {
  console.log("loadData");
  return { type: LOAD_DATA, payload: data };
}

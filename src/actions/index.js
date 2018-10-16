import { LOAD_DATA } from "./types";
import data from "../data/data";

export function loadData() {
  console.log("loadData");
  return { type: LOAD_DATA, payload: data };
}

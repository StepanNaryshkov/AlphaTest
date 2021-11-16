import CNTS from './../const';
import getRandomIntInclusive from "./getRandomIntInclusive";
import getEmptyMap from "./getEmptyMap";
import {Matrix} from "../types";

export default function getInitialData(count: number): Matrix {
  const res: Matrix = getEmptyMap();
  for (; count > 0; count--) {
    res[getRandomIntInclusive(0, CNTS.DEFAULT_SIZE - 1)][
      getRandomIntInclusive(0, CNTS.DEFAULT_SIZE - 1)
      ] = CNTS.LIVE_CELL;
  }
  return res;
}

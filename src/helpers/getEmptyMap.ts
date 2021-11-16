import CNTS from './../const';
import {Matrix} from "../types";


const getEmptyMap = (): Matrix => {
  return Array(CNTS.DEFAULT_SIZE).fill(null)
    .map(() => Array(CNTS.DEFAULT_SIZE).fill(CNTS.DEAD_CELL));
}

export default getEmptyMap;

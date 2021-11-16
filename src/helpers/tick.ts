import getEmptyMap from "./getEmptyMap";
import CNTS from './../const';
import {Matrix} from "../types";
import CNST from '../const';

export default function tick(data: Matrix): Matrix {
  const res:Matrix = getEmptyMap();
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      const curElement = data[i][j];
      let counter = 0;

      for (let x = 0; x < CNTS.POSITIONS.length; x++) {
        const [left, right] = CNTS.POSITIONS[x];
        if (data[i + left] && data[i + left][j + right] === CNST.LIVE_CELL) {
          counter++;
        }
      }

      // Any live cell with fewer than two live neighbours dies (underpopulation).
      if (curElement === CNST.LIVE_CELL && counter < 2) res[i][j] = CNST.DEAD_CELL;

      // Any live cell with two or three live neighbours lives on to the next generation
      if (curElement === CNST.LIVE_CELL && (counter === 2 || counter === 3)) res[i][j] = CNST.LIVE_CELL;

      // Any live cell with more than three live neighbours dies (overcrowding).
      if (curElement === CNST.LIVE_CELL && counter > 3) res[i][j] = CNST.DEAD_CELL;

      // Any dead cell with exactly three live neighbours becomes a live cell (reproduction).
      if (curElement === CNST.DEAD_CELL && counter === 3) res[i][j] = CNST.LIVE_CELL;
    }
  }

  return res;
}

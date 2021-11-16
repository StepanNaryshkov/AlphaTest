import tick from './tick';
import getEmptyMap from "./getEmptyMap";
const data = getEmptyMap();

describe('tick', () => {
  test('should correctly handle tick', () => {
    data[3][5] = 1;
    data[3][4] = 1;
    data[3][3] = 1;

    const expectedData = () => {
      const res = getEmptyMap();
      res[2][4] = 1;
      res[4][4] = 1;
      res[3][4] = 1;

      return res;
    };
    expect(tick(data)).toStrictEqual(expectedData())
  });

  test('should be the same result after tick', () => {
    data[3][5] = 1;
    data[3][4] = 1;
    data[4][5] = 1;
    data[4][4] = 1;

    const expectedData = () => {
      const res = getEmptyMap();
      res[3][5] = 1;
      res[3][4] = 1;
      res[4][5] = 1;
      res[4][4] = 1;

      return res;
    };
    expect(tick(data)).toStrictEqual(expectedData())
  });
});

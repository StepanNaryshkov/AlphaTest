import getEmptyMap from './getEmptyMap';
import CNST from './../const';

describe('getEmptyMap', () => {
  test('should return empty map', () => {
    expect(getEmptyMap()).toStrictEqual(Array(CNST.DEFAULT_SIZE).fill(null).map(()=>Array(CNST.DEFAULT_SIZE).fill(0)));
  });
});

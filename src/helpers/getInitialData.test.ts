import getInitialData from './getInitialData';

describe('getInitialData', () => {
  test('should return matrix with 1 live cell', () => {
    const data = getInitialData(1);
    expect(data.map(row => row.filter((cell) => cell === 1)).filter(row => row.length)).toHaveLength(1);
  });
});

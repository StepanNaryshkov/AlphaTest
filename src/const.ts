export default {
  DEFAULT_SIZE: 50 as const,
  INTERVAL: 1000 as const,
  DEFAULT_LIVE_CELLS: 100 as const,
  LIVE_CELL: 1 as const,
  DEAD_CELL: 0 as const,
  POSITIONS: [
    [1, -1],
    [1, 0],
    [1, 1],
    [0, 1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1]
  ] as const,
} as const;

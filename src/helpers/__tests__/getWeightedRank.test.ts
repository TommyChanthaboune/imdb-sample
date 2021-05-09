import { getWeightedRank } from '../getWeightedRank';

describe('Helper - getWeightedRank', () => {
  it('should return the correct mean value', () => {
    const mean = getWeightedRank(8, 1000, 1000, 8);
    expect(mean).toBe(8);
  });
});

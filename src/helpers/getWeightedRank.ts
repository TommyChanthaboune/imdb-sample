export const getWeightedRank = (
  voteAverage: number,
  voteCount: number,
  minimumVote: number,
  meanValue: number
): number =>
  // Weighted Ratings
  // https://stats.stackexchange.com/a/6423
  parseFloat(
    (
      (voteCount / (voteCount + minimumVote)) * voteAverage +
      (minimumVote / (voteCount + minimumVote)) * meanValue
    ).toFixed(2)
  );

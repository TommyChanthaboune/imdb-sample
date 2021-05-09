import { getMeanVotesFromMovies } from './getMeanVotesFromMovies';
import { getWeightedRank } from './getWeightedRank';
import { IMovie, IWeightedMovie } from '../interfaces';

export const calculateTopFiveMovies = (movies: IMovie[]): IWeightedMovie[] => {
  const minimumVotes = 1000;
  const meanValue = getMeanVotesFromMovies(movies);
  return movies
    .map((movie) => ({
      ...movie,
      weight: getWeightedRank(
        parseFloat(movie.voteAverage),
        parseInt(movie.voteCount, 10),
        minimumVotes,
        meanValue
      )
    }))
    .sort((n1, n2) => n2.weight - n1.weight)
    .slice(0, 5);
};

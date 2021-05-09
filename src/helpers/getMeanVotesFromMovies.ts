import { IMovie } from '../interfaces';

export const getMeanVotesFromMovies = (data: IMovie[]): number =>
  data
    .map((movie) => parseFloat(movie.voteAverage))
    .reduce((a, b) => a + b, 0) / data.length;

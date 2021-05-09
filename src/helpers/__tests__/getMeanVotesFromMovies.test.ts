import { getMeanVotesFromMovies } from '../index';
import { IMovie } from '../../interfaces';

const mockMovie: IMovie = {
  id: 'test',
  voteAverage: '0',
  voteCount: '1000',
  posterPath: '',
  title: '',
  genres: ['action', 'adventure']
};

const mockMovies: IMovie[] = [
  { ...mockMovie, voteAverage: '6' },
  { ...mockMovie, voteAverage: '11' },
  { ...mockMovie, voteAverage: '7' }
];

describe('Helper - getMeanValue', () => {
  it('should return the correct mean value', () => {
    const mean = getMeanVotesFromMovies(mockMovies);
    expect(mean).toBe(8);
  });
});

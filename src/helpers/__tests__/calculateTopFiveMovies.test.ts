import { calculateTopFiveMovies } from '../index';
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

const correctOrder: IMovie[] = [
  {
    genres: ['action', 'adventure'],
    id: 'test',
    posterPath: '',
    title: '',
    voteAverage: '11',
    voteCount: '1000',
    weight: 9.5
  },
  {
    genres: ['action', 'adventure'],
    id: 'test',
    posterPath: '',
    title: '',
    voteAverage: '7',
    voteCount: '1000',
    weight: 7.5
  },
  {
    genres: ['action', 'adventure'],
    id: 'test',
    posterPath: '',
    title: '',
    voteAverage: '6',
    voteCount: '1000',
    weight: 7
  }
];

describe('Helper - getMeanValue', () => {
  it('should return the correct mean value', () => {
    const mean = calculateTopFiveMovies(mockMovies);
    expect(mean).toStrictEqual(correctOrder);
  });
});

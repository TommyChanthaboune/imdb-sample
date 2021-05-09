/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from '@apollo/react-hooks';
import { gql, ApolloError } from '@apollo/client';
import { IMovieDetail } from '../interfaces';

interface IMovieDetailQueryReturn {
  data: IMovieDetail;
  error: ApolloError | undefined;
  loading: Boolean;
}

const MOVIE_QUERY = gql`
  query Movie($id: ID!) {
    Movie(id: $id) {
      id
      originalLanguage
      originalTitle
      overview
      popularity
      posterPath
      releaseDate
      title
      voteAverage
      voteCount
      budget
      runtime
      genres
      cast
      director
    }
  }
`;

export const useMovieDetailQuery = (id: string): IMovieDetailQueryReturn => {
  const { data, loading, error } = useQuery(MOVIE_QUERY, {
    fetchPolicy: 'cache-and-network',
    variables: {
      id
    }
  });

  const movie = data?.Movie ?? {};

  return {
    data: movie,
    error,
    loading
  };
};

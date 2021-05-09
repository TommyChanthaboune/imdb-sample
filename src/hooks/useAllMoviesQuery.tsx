import { useQuery } from '@apollo/react-hooks';
import { gql, ApolloError } from '@apollo/client';
import { IMovie } from '../interfaces';

/**
 * NOTE: Due to limitations with JSON-server,
 * this query does not fully reflect each field and
 * associated type, but will return the full set of data
 * regardless.
 * */

const ALL_MOVIES_QUERY = gql`
  query allMovies {
    allMovies {
      id
      title
      voteCount
      voteAverage
      posterPath
      genres
    }
  }
`;

export const useAllMoviesQuery = (): {
  data: IMovie[];
  error: ApolloError | undefined;
  loading: Boolean;
} => {
  const { data, loading, error } = useQuery(ALL_MOVIES_QUERY, {
    fetchPolicy: 'cache-and-network'
  });

  const result = data?.allMovies ?? [];

  return {
    data: result,
    error,
    loading
  };
};

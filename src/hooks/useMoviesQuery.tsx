/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from '@apollo/react-hooks';
import { gql, ApolloError } from '@apollo/client';
import { IMovieSort, IPaging, IFilterConditons } from '../interfaces';
import { SortOptions } from '../enums';

export interface IMovieQueryReturn {
  data: IMovieSort[];
  error: ApolloError | undefined;
  loading: Boolean;
}

const MOVIE_QUERY = gql`
  query allMovies($sortField: String, $page: Int, $filter: MovieFilter) {
    allMovies(
      sortField: $sortField
      sortOrder: "dsc"
      page: $page
      filter: $filter
    ) {
      id
      title
      voteCount
      voteAverage
      posterPath
      genres
      popularity
      budget
      runtime
      releaseDate
    }
  }
`;

export const useMoviesQuery = (
  paging: IPaging,
  sortOptions: SortOptions,
  filterOptions?: IFilterConditons
): IMovieQueryReturn => {
  const { data, loading, error } = useQuery(MOVIE_QUERY, {
    fetchPolicy: 'cache-and-network',
    variables: {
      sortField: SortOptions[sortOptions],
      filter: filterOptions,
      ...paging
    }
  });

  const result = data?.allMovies ?? [];

  return {
    data: result,
    error,
    loading
  };
};

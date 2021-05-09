import React, { FC } from 'react';
import { Poster } from '../Poster/Poster';
import { IPaging, IFilterConditons } from '../../interfaces';
import { SortOptions } from '../../enums/index';
import { useMoviesQuery } from '../../hooks';

interface IMovies {
  paging: IPaging;
  sortBy?: SortOptions;
  filterBy?: IFilterConditons;
}

export const Movies: FC<IMovies> = ({
  paging,
  sortBy = SortOptions.popularity,
  filterBy = {}
}) => {
  const { data, loading } = useMoviesQuery(paging, sortBy, filterBy);

  return (
    <div className="movies">
      {loading ? (
        <p> Loading... </p>
      ) : (
        <>
          {data.length ? (
            data.map((movie) => (
              <Poster
                key={movie.id}
                source={movie.posterPath}
                altText={movie.title}
                id={movie.id}
              />
            ))
          ) : (
            <div>
              <h3>There are no results for your query.</h3>
            </div>
          )}
        </>
      )}
    </div>
  );
};

import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { calculateTopFiveMovies } from '../../helpers';
import { IMovie } from '../../interfaces';
import { Poster } from '../../components/Poster/Poster';
import { Rating } from '../../components/Rating/Rating';

export interface ITopFiveSection {
  movies: IMovie[];
}

export const TopFiveSection: FC<ITopFiveSection> = ({ movies }) => (
  <div className="posters">
    {calculateTopFiveMovies(movies).map((movie) => (
      <div className="poster-container" key={movie.id}>
        <Poster source={movie.posterPath} altText={movie.title} id={movie.id} />
        <div className="poster__title">
          <h3>{movie.title}</h3>
          <Rating score={parseFloat(movie.voteAverage)} />
        </div>
        <p className="poster__genre">
          {movie.genres.map(
            (genre, i) => `${genre}${movie.genres.length !== i + 1 ? ',' : ''} `
          )}
        </p>
        <Link
          to={`/detail?movie=${movie.id}`}
          className="button button--block"
          tabIndex={-1}
        >
          View Details
        </Link>
      </div>
    ))}
  </div>
);

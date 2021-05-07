import React from 'react';
// import { useAllMoviesQuery } from '../../graphql';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

export interface Movie {
  id: string;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: string;
  posterPath: string;
  releaseDate: string;
  title: string;
  voteAverage: string;
  voteCount: string;
  genres: string[];
  budget: string;
  runtime: string;
  cast: string[];
  director: string;
}

/**
 * You have the option to use either REST
 * or GraphQL, whichever you prefer.
 *
 * Defaults to REST.
 *
 * Use `graphql/useAllMoviesQuery` instead for
 * GraphQL.
 * */

const Home = () => (
  // const { data, loading } = useAllMoviesQuery();

  <>
    <section className="hero">
      <div className="section-header">
        <SectionTitle section="Movies" title="Top 5" highlight />
        {/* <div className="highlight-header__form"></div> */}
      </div>
      {/* <h2>Popular Movies</h2>

        {loading ? (
          <div>Loading movies...</div>
        ) : (
          <ol>
            {data.map((movie: Movie) => (
              <li key={movie.id}>
                {movie.title}
                <ul>
                  <li>Release Date: {movie.releaseDate}</li>
                  <li>Description: {movie.overview}</li>
                  <li>Average Vote: {movie.voteAverage}</li>
                  <li>Total Votes: {movie.voteCount}</li>
                  <li>Genres: {movie.genres.join(', ')}</li>
                </ul>
              </li>
            ))}
          </ol>
        )} */}
    </section>
    <section className="genre">
      <div className="section-header">
        <SectionTitle section="Browse" title="by Genre" />
      </div>
    </section>
    <section>
      <div className="section-header">
        <div className="section-header__main">
          <SectionTitle section="Movies" title="Browse All" />
        </div>
        <div className="section-header__secondary">
          <label htmlFor="sort-by">
            Sort By
            <select id="sort-by" name="sort-by">
              <option>Popularity</option>
            </select>
          </label>
        </div>
      </div>
    </section>
  </>
);

export default Home;

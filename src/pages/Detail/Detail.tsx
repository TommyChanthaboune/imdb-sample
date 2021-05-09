import React from 'react';
import queryString from 'query-string';
import { useLocation, Link } from 'react-router-dom';
import { useMovieDetailQuery } from '../../hooks';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { Rating } from '../../components/Rating/Rating';
import { Cast } from '../../components/Cast/Cast';

import BackArrow from '../../assets/BackArrow.svg';

export const Detail = () => {
  const location = useLocation();
  const searchParams = queryString.parse(location.search);
  const { loading, data } = useMovieDetailQuery(searchParams.movie as string);

  return (
    <section className="section-hero">
      {loading ? (
        <div>
          <h3>Loading Movie Details...</h3>
        </div>
      ) : (
        data && (
          <>
            <div className="section-header">
              <div className="section-header__main">
                <Link
                  to="/"
                  className="button button--text section-header__back"
                >
                  <img src={BackArrow} alt="Go Back" />
                </Link>
                <SectionTitle section="Movie" title="Detail" inline />
              </div>
            </div>
            <div className="detail">
              <div className="detail__poster">
                <img src={data.posterPath} alt={data.title} />
              </div>
              <div className="detail__overview">
                <Rating score={8.8} showTotal />
                <h3>
                  {data.title}{' '}
                  <span>({new Date(data.releaseDate).getFullYear()})</span>
                </h3>
                <p className="detail__genre">
                  {data.genres.map(
                    (genre, i) =>
                      `${genre}${data.genres.length !== i + 1 ? ',' : ''} `
                  )}
                </p>

                <p className="detail__director">
                  Director: {data.director.name}
                </p>
                <p className="detail__content">{data.overview}</p>
              </div>
            </div>

            <div className="cast-members">
              <h4>Cast</h4>
              <div className="cast-members__container">
                {data.cast.map((cast) => (
                  <Cast
                    key={cast.name}
                    portraitPath={cast.profilePath}
                    name={cast.name}
                    character={cast.character}
                  />
                ))}
                <Cast name="Tommy Chanthaboune" character="Developer" />
              </div>
            </div>
          </>
        )
      )}
    </section>
  );
};

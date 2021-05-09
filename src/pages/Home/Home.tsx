import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { parseOptions } from '../../helpers';
import { useAllMoviesQuery } from '../../hooks';
import { SortOptions } from '../../enums';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { TopFiveSection } from './TopFiveSection';
import { Movies } from '../../components/Movies/Movies';
import BackArrow from '../../assets/BackArrow.svg';

export const Home = () => {
  const { data, loading } = useAllMoviesQuery();
  const [sortField, setSortField] = useState<SortOptions>(0);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortField(parseInt(e.target.value, 10));
  };

  return (
    <>
      <section className="section-hero">
        <div className="section-header">
          <SectionTitle section="Movies" title="Top 5" inline />
        </div>
        {loading ? (
          <div>Loading movies...</div>
        ) : (
          <TopFiveSection movies={data} />
        )}
      </section>
      <section className="section-genre">
        <div className="section-header">
          <SectionTitle section="Browse" title="by Genre" />
        </div>
        <div className="genres">
          <div className="genres__links">
            <Link to="/browse?genre=comedy">Comedy</Link>
          </div>
          <div className="genres__links">
            <Link to="/browse?genre=action">Action</Link>
          </div>
          <div className="genres__links">
            <Link to="/browse?genre=drama">Drama</Link>
          </div>
          <div className="genres__links">
            <Link to="/browse?genre=true-crime">True Crime</Link>
          </div>
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
              <select id="sort-by" name="sort-by" onChange={handleSortChange}>
                {Object.values(SortOptions)
                  .filter((option) => Number.isNaN(Number(option)) === false)
                  .map((key, i) => (
                    <option key={key} value={i}>
                      {parseOptions(SortOptions[i])}
                    </option>
                  ))}
              </select>
            </label>
          </div>
        </div>
        <Movies sortBy={sortField} paging={{ page: 1 }} />
      </section>
      <section className="section-browse-all">
        <Link to="/browse">
          All Movies{' '}
          <span aria-hidden>
            <img src={BackArrow} alt="back-arrow" />
          </span>
        </Link>
      </section>
    </>
  );
};

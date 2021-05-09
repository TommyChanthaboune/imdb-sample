import React, { FC, useEffect, useState } from 'react';
import { useHistory, useLocation, Link } from 'react-router-dom';
import queryString from 'query-string';
import { SortOptions } from '../../enums';
import { parseUrlParam, parseOptions } from '../../helpers';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { Movies } from '../../components/Movies/Movies';
import BackArrow from '../../assets/BackArrow.svg';

export const Browse: FC = () => {
  const history = useHistory();
  const location = useLocation();
  const searchParams = queryString.parse(location.search);

  const title = searchParams.genre
    ? parseUrlParam(searchParams.genre as string)
    : 'All Movies';

  const initialSortField = searchParams.sortBy as keyof typeof SortOptions;

  const [sortField, setSortField] = useState<SortOptions>(
    initialSortField ? SortOptions[initialSortField] : 0
  );

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortField(parseInt(e.target.value, 10));
  };

  useEffect(() => {
    searchParams.sortBy = SortOptions[sortField];
    history.push(`${location.pathname}?${queryString.stringify(searchParams)}`);
  }, [sortField]);

  return (
    <section className="section-hero">
      <div className="section-header">
        <div className="section-header__main">
          <Link to="/" className="button button--text section-header__back">
            <img src={BackArrow} alt="Go Back" />
          </Link>
          <SectionTitle section="Movies" title={title} inline />
        </div>
        <div className="section-header__secondary">
          <label htmlFor="sort-by">
            Sort By
            <select
              id="sort-by"
              name="sort-by"
              onChange={handleSortChange}
              value={sortField}
            >
              {Object.values(SortOptions)
                .filter((option) => Number.isNaN(Number(option)) === false)
                .map((key, i) => (
                  <option value={i} key={key}>
                    {parseOptions(SortOptions[i])}
                  </option>
                ))}
            </select>
          </label>
        </div>
      </div>
      <Movies
        sortBy={sortField}
        paging={{ page: 1 }}
        filterBy={title === 'All Movies' ? {} : { genres: [title] }}
      />
    </section>
  );
};

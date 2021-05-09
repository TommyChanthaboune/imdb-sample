import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface IPost {
  source: string;
  altText: string;
  id: string;
}

export const Poster: FC<IPost> = ({ source, altText, id }) => (
  <div className="poster">
    <Link to={`/detail?movie=${id}`}>
      <img src={source} alt={altText} />
    </Link>
  </div>
);

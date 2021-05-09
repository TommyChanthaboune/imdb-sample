import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface IPost {
  source: string;
  altText: string;
  id: string;
}

export const Poster: FC<IPost> = ({ source, altText, id }) => (
  <div className="poster">
    <Link to={`/detail?movie=${id}`}>
      <LazyLoadImage src={source} alt={altText} />
    </Link>
  </div>
);

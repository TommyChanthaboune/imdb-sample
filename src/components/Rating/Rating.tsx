import React, { FC } from 'react';
import Star from '../../assets/Star.svg';

interface IRating {
  score: number;
  showTotal?: boolean;
}

export const Rating: FC<IRating> = ({ score, showTotal }) => (
  <div className={`rating ${showTotal ? 'rating--with-total' : ''}`}>
    <img src={Star} alt={`${score} Rating`} />
    <span className="rating__score">
      {score} {showTotal && <span className="rating__total">/ 10</span>}
    </span>
  </div>
);

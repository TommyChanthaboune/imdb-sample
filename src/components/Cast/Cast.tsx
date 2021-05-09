import React, { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Avatar from '../../assets/Avatar.svg';

interface ICast {
  name: string;
  character: string;
  portraitPath?: string;
}

export const Cast: FC<ICast> = ({ portraitPath, name, character }) => (
  <div className="cast">
    <div className="cast__portrait">
      {portraitPath ? (
        <LazyLoadImage src={portraitPath} alt={name} />
      ) : (
        <div className="cast__placeholder">
          <LazyLoadImage src={Avatar} alt={name} />
        </div>
      )}
    </div>
    <p className="cast__name">{name}</p>
    <p className="cast__character">{character}</p>
  </div>
);

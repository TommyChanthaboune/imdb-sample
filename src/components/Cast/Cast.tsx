import React, { FC } from 'react';
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
        <img src={portraitPath} alt={name} />
      ) : (
        <div className="cast__placeholder">
          <img src={Avatar} alt={name} />
        </div>
      )}
    </div>
    <p className="cast__name">{name}</p>
    <p className="cast__character">{character}</p>
  </div>
);

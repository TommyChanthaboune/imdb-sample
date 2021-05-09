import React, { FC } from 'react';
import Logo from '../../assets/Logo.svg';

export const MainHeader: FC = () => (
  <header className="main-header">
    <a href="/" className="main-header__logo">
      <img src={Logo} alt="Reel Cinema Logo" />
    </a>
    <div className="main-header__title">
      <h1>Reel Cinema</h1>
    </div>
  </header>
);

import React from 'react';
import logo from '../images/header-logo.svg'

function Header() {
  return (
    <header className="header">
      <a href="https://Lattecup.github.io/mesto/">
        <img src={logo} className="header__logo" alt="Логотип" />
      </a>
    </header>
  );
};

export default Header;

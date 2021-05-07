import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({ onSearch }) {
  return (
    <div className="Nav-Container-M">
      <nav className="navbar b">
        <a className="home" href="/">
          Weather App
        </a>
        <div className="nav-Add">
          <a href="/About" className="">Acerca De</a>
          <a href="/Credits" className="">Créditos</a>
        </div>
        <SearchBar className="search" onSearch={onSearch} />
      </nav>
    </div>
  );
};

export default Nav;

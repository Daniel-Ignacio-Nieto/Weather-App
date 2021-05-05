import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({ onSearch }) {
  return (
    <div>
      <nav class="navbar navbar-light b">
        <a class="home" href="/">
          <h4>Weather App</h4>
        </a>
        <SearchBar className="search" onSearch={onSearch} />
      </nav>
    </div>
  );
};

export default Nav;

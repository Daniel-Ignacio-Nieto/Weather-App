import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (

    <form className="Searchbar-Container" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        className="form"
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className="Search-Button" type="submit" value="Agregar" />
    </form>
  );
}

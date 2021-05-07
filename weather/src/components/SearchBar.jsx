import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <form className="Searchbar-Form" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("")
    }}>
      <input
        className="Searchbar-Input"
        type="text"
        placeholder="Ejemplo: Córdoba"
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className="Search-Button" type="submit" value="Agregar" />
    </form>
  );
}

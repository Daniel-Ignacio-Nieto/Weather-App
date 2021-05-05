import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form class="Searchbar" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        class="form"
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className= "btn btn-success bu ba" type="submit" value="Agregar" />
    </form>
  );
}

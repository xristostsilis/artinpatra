import React from 'react';
import './Search.css';

const Search = ({ query, setQuery }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Αναζήτηση εκδηλώσεων..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;

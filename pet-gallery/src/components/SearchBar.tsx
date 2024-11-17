import React from 'react';

const SearchBar = ({ setSearchTerm }: { setSearchTerm: (term: string) => void }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;

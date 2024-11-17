const SearchBar = ({ setSearchTerm }: { setSearchTerm: (term: string) => void }) => {
  return (
    <input
      type="text"
      placeholder="Search by title or description..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;

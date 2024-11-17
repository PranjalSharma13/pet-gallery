import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import { SearchBarProps } from '../types/searchBarTypes'; 

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 25px;
  background-color: #f2f2f2;
  padding: 5px 15px;
  max-width: 400px; /* Adjust width as needed */
`;
const SearchIcon = styled(FaSearch)`
  color: #888;
  font-size: 20px;
  margin-right: 10px; /* Space between icon and input */
`;
const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  flex-grow: 1;
  padding: 8px;
  border-radius: 25px;
  color: #333;
  
  &::placeholder {
    color: #888;
  }

  &:focus {
    border: 1px solid #f0f0f5; /* React blue color */
  }
`;


const SearchBar = ({ setSearchTerm }: SearchBarProps) => {
  return (
    <SearchBarContainer>
    <SearchIcon />
    <SearchInput
      type="text"
      placeholder="Search..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    </SearchBarContainer>
  );
};

export default SearchBar;

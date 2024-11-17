import React from 'react';
import { FaSortAlphaDown, FaSortAlphaUp } from 'react-icons/fa';
import styled from 'styled-components';

const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const Button = styled.button<{ isActive: boolean }>`
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? '#007bff' : '#f2f2f2')}; /* Active state color */
  color: ${({ isActive }) => (isActive ? 'white' : '#333')}; /* Text color for active/inactive */
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? '#0056b3' : '#ddd')}; /* Hover color */
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

interface SortButtonsProps {
  handleSort: (order: 'asc' | 'desc') => void;
  selectedSortOrder: 'asc' | 'desc'; // To track the currently selected sort order
}

const SortButtons: React.FC<SortButtonsProps> = ({ handleSort, selectedSortOrder }) => {
  return (
    <ButtonsContainer>
      <Button onClick={() => handleSort('asc')} isActive={selectedSortOrder === 'asc'}>
        <FaSortAlphaUp /> Sort A-Z
      </Button>
      <Button onClick={() => handleSort('desc')} isActive={selectedSortOrder === 'desc'}>
        <FaSortAlphaDown /> Sort Z-A
      </Button>
    </ButtonsContainer>
  );
};

export default SortButtons;

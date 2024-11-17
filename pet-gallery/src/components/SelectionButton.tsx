import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa'; // Import icons
import styled from 'styled-components';

const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  background-color: #f2f2f2; /* Light gray background */
  color: #333; /* Dark text color */
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: #ddd; /* Slightly darker gray on hover */
  }

  &:disabled {
    background-color: #e0e0e0; /* Disabled state gray */
    cursor: not-allowed;
  }
`;

interface SelectionButtonsProps {
  handleSelectAll: () => void;
  handleClearSelection: () => void;
}

const SelectionButtons: React.FC<SelectionButtonsProps> = ({
  handleSelectAll,
  handleClearSelection,
}) => {
  return (
    <ButtonsContainer>
      <Button onClick={handleSelectAll}>
        <FaCheck /> Select All
      </Button>
      <Button onClick={handleClearSelection}>
        <FaTimes /> Clear
      </Button>
    </ButtonsContainer>
  );
};

export default SelectionButtons;

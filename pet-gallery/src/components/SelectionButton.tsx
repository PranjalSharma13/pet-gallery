// components/SelectionButtons.tsx
import React from 'react';

interface SelectionButtonsProps {
  handleSelectAll: () => void;
  handleClearSelection: () => void;
}

const SelectionButtons: React.FC<SelectionButtonsProps> = ({ handleSelectAll, handleClearSelection }) => {
  return (
    <div>
      <button onClick={handleSelectAll}>Select All</button>
      <button onClick={handleClearSelection}>Clear</button>
    </div>
  );
};

export default SelectionButtons;

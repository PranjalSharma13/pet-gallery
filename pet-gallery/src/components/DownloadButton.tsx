import React from 'react';
import { FaDownload } from 'react-icons/fa'; // Importing the download icon
import styled from 'styled-components';

const Button = styled.button<{ isDisabled: boolean }>`
  padding: 8px 16px;
  font-size: 16px;
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ isDisabled }) => (isDisabled ? '#ddd' : '#007bff')};
  color: ${({ isDisabled }) => (isDisabled ? '#888' : 'white')};
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: ${({ isDisabled }) => (isDisabled ? '#ddd' : '#0056b3')};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

interface DownloadButtonsProps {
  handleDownloadSelected: () => void;
  selectedSize: number;
}

const DownloadButtons: React.FC<DownloadButtonsProps> = ({ handleDownloadSelected, selectedSize }) => {
  return (
    <Button onClick={handleDownloadSelected} isDisabled={selectedSize === 0} disabled={selectedSize === 0}>
      <FaDownload /> Download Selected
    </Button>
  );
};

export default DownloadButtons;

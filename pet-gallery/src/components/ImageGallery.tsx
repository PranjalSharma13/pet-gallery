import React, { useState } from 'react';
import usePets from '../hooks/usePets';
import ImageCard from './ImageCard';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import { saveAs } from 'file-saver';


const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  padding: 16px;
`;

const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
`;

const ImageWrapper = styled.div<{ isSelected: boolean }>`
  cursor: pointer;
  border: ${({ isSelected }) => (isSelected ? '2px solid blue' : 'none')};
`;

const ImageGallery: React.FC = () => {
  const { pets, loading, error } = usePets();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedSortOrder, setSelectedSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selected, setSelected] = useState<Set<string>>(new Set()); // Set to track selected images

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Adding a unique id to each pet to track them individually
  const petsWithId = pets.map((pet, index) => ({
    ...pet,
    id: pet.title.replace(/\s+/g, '-') + '-' + index, // Generate unique id
  }));

  // Filter pets based on the search term
  const filteredPets = petsWithId.filter(
    (pet) =>
      pet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pet.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort pets based on the selected order
  const sortedPets = [...filteredPets].sort((a, b) =>
    selectedSortOrder === 'asc'
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title)
  );

  // Handle search term change
  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  // Handle sorting
  const handleSort = (order: 'asc' | 'desc') => {
    setSelectedSortOrder(order);
  };

  // Toggle selection of a pet
  const toggleSelect = (id: string) => {
    setSelected((prev) => {
      const newSelected = new Set(prev);
      if (newSelected.has(id)) {
        newSelected.delete(id); // Deselect if already selected
      } else {
        newSelected.add(id); // Select if not selected
      }
      return newSelected;
    });
  };

  // Handle download of selected images
  const handleDownloadSelected = () => {
    selected.forEach((id) => {
      const pet = petsWithId.find((pet) => pet.id === id);
      if (pet) {
        saveAs(pet.url, pet.title + '.jpg'); // Download each selected image
      }
    });
  };

  return (
    <div>
      <ControlsContainer>
        <SearchBar setSearchTerm={handleSearchChange} />
        <div>
          <button onClick={() => handleSort('asc')}>Sort A-Z</button>
          <button onClick={() => handleSort('desc')}>Sort Z-A</button>
          <button onClick={handleDownloadSelected} disabled={selected.size === 0}>
            Download Selected
          </button>
        </div>
      </ControlsContainer>
      <GalleryContainer>
        {sortedPets.map((pet) => (
          <ImageWrapper
            key={pet.id}
            isSelected={selected.has(pet.id)} // Apply selection border conditionally
            onClick={() => toggleSelect(pet.id)} // Toggle selection on click
          >
            <ImageCard pet={pet} />
          </ImageWrapper>
        ))}
      </GalleryContainer>
    </div>
  );
};

export default ImageGallery;

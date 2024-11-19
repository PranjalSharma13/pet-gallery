import React, { useState } from 'react';
import usePets from '../hooks/usePets';
import ImageCard from './ImageCard';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import { saveAs } from 'file-saver';
import SortButtons from './SortButtons';
import DownloadButtons from './DownloadButton';
import SelectionButtons from './SelectionButton';


const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Flexible columns */
  gap: 16px; /* Space between cards */
  padding: 16px;
  align-items: start; /* Aligned cards at the start to prevent extra gaps */
`;


const ControlsContainer = styled.div`
  display: flex;
  justify-content: flex-start; /* Aligned buttons to the left */
  gap: 16px; /* Added spacing between buttons */
  margin: 16px 0;
  flex-wrap: wrap;
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
      console.log('Updated Selected:', Array.from(newSelected)); 
      return newSelected;
    });
  };

  // Handle download of selected images
  const handleDownloadSelected = () => {
    selected.forEach((id) => {
      const pet = petsWithId.find((pet) => pet.id === id);
      if (pet) {
        console.log('Downloading:', pet); 
        saveAs(pet.url, pet.title + '.jpg'); // Download each selected image
      }
    });
  };
   // Select all images
   const handleSelectAll = () => {
    const allIds = new Set(petsWithId.map((pet) => pet.id));
    setSelected(allIds); // Add all pet IDs to selected
  };

  // Clear selection
  const handleClearSelection = () => {
    setSelected(new Set()); // Clear the selected set
  };

  return (
    <div>
      <ControlsContainer>
        <SearchBar setSearchTerm={handleSearchChange} />
        <SortButtons handleSort={handleSort}  selectedSortOrder={selectedSortOrder}/>
        <DownloadButtons handleDownloadSelected={handleDownloadSelected} selectedSize={selected.size} />
          <SelectionButtons
            handleSelectAll={handleSelectAll}
            handleClearSelection={handleClearSelection}
          />
      </ControlsContainer>
      <GalleryContainer>
        {sortedPets.map((pet) => (
          <ImageCard
          key={pet.id}
          pet={pet}
          isSelected={selected.has(pet.id)} // Applied selection border 
          onClick={() => toggleSelect(pet.id)} // Toggle selection on click
        />
        ))}
      </GalleryContainer>
    </div>
  );
};

export default ImageGallery;

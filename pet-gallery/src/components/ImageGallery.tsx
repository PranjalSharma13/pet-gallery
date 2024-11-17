import React, { useState } from 'react';
import usePets from '../hooks/usePets';
import ImageCard from './ImageCard';
import styled from 'styled-components';
import SearchBar from './SearchBar'; // Make sure you have this SearchBar component

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

const ImageGallery: React.FC = () => {
  const { pets, loading, error } = usePets();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedSortOrder, setSelectedSortOrder] = useState<'asc' | 'desc'>('asc');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Filter pets based on search term
  const filteredPets = pets.filter(
    (pet) =>
      pet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pet.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort pets based on selected order
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

  return (
    <div>
      <ControlsContainer>
        <SearchBar setSearchTerm={handleSearchChange} />
        <div>
          <button onClick={() => handleSort('asc')}>Sort A-Z</button>
          <button onClick={() => handleSort('desc')}>Sort Z-A</button>
        </div>
      </ControlsContainer>
      <GalleryContainer>
        {sortedPets.map((pet, index) => (
          <ImageCard key={index} pet={pet} />
        ))}
      </GalleryContainer>
    </div>
  );
};

export default ImageGallery;

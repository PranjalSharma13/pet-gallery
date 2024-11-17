// src/components/ImageGallery.tsx
import React from 'react';
import usePets from '../hooks/usePets';
import ImageCard from './ImageCard';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  padding: 16px;
`;

const ImageGallery: React.FC = () => {
  const { pets, loading, error } = usePets();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <GalleryContainer>
      {pets.map((pet, index) => (
        <ImageCard key={index} pet={pet} />
      ))}
    </GalleryContainer>
  );
};

export default ImageGallery;

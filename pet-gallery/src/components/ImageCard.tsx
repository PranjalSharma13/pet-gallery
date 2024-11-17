// src/components/ImageCard.tsx
import React from 'react';
import styled from 'styled-components';
import { Pet } from '../types/Pet';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const PetImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ImageCard: React.FC<{ pet: Pet }> = ({ pet }) => {
  return (
    <Card>
      <PetImage src={pet.url} alt={pet.title} />
      <h3>{pet.title}</h3>
      <p>{pet.description}</p>
      <small>Created on: {new Date(pet.created).toLocaleDateString()}</small>
    </Card>
  );
};

export default ImageCard;

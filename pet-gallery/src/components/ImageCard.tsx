import React from 'react';
import styled from 'styled-components';
import { Pet } from '../types/Pet';

const Card = styled.div<{ isSelected: boolean }>`
  border: ${({ isSelected }) => (isSelected ? '2px solid #b0adac' : '1px solid #ddd')};
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  background: ${({ isSelected }) => (isSelected ? '#e0f7fa' : '#fff')};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background 0.3s ease, border 0.3s ease;

  display: flex;
  flex-direction: column; /* Stacked content vertically */
  height: auto; /* Allowed dynamic height based on content */
`;

const PetImage = styled.img`
  width: 100%;
  height: auto; /* Maintained aspect ratio */
  border-radius: 8px;
  margin-bottom: 8px; /* Added spacing below the image */
`;

const Title = styled.h3`
  margin-bottom: 8px;  /* Added some space below the title */
  color: #000; 
`;

const Description = styled.p`
  margin-bottom: 12px;  /* Added some space below the description */
  color: #000; 
`;

const DateText = styled.small`
  margin-top: 8px;  /* Added some space above the date */
  color: #000; 
`;

const ImageCard: React.FC<{ pet: Pet; isSelected: boolean; onClick: () => void }> = ({ pet, isSelected, onClick }) => {
  return (
    <Card isSelected={isSelected} onClick={onClick}>
      <PetImage src={pet.url} alt={pet.title} />
      <Title>{pet.title}</Title>
      <Description>{pet.description}</Description>
      <DateText>Created on: {new Date(pet.created).toLocaleDateString()}</DateText>
    </Card>
  );
};

export default ImageCard;

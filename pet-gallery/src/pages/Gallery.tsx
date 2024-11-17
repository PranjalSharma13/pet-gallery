import React, { useState } from 'react';
import usePets from '../hooks/usePets';
import styled from 'styled-components';

const Gallery = () => {
  const { pets, loading, setPets } = usePets();
  const [selected, setSelected] = useState<Set<string>>(new Set());

  if (loading) return <p>Loading...</p>;

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.has(id) ? new Set([...prev].filter((item) => item !== id)) : new Set(prev).add(id)
    );
  };

  const handleSelectAll = () => {
    setSelected(new Set(pets.map((pet) => pet.id)));
  };

  const handleClear = () => setSelected(new Set());

  const handleDownload = () => {
    const selectedPets = pets.filter((pet) => selected.has(pet.id));
    selectedPets.forEach((pet) => {
      const link = document.createElement('a');
      link.href = pet.imageUrl;
      link.download = pet.title;
      link.click();
    });
  };

  const sortByName = (order: 'asc' | 'desc') => {
    const sortedPets = [...pets].sort((a, b) =>
      order === 'asc'
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );
    setPets(sortedPets);
  };

  return (
    <div>
      <button onClick={handleSelectAll}>Select All</button>
      <button onClick={handleClear}>Clear Selection</button>
      <button onClick={handleDownload}>Download Selected</button>
      <button onClick={() => sortByName('asc')}>Sort A-Z</button>
      <button onClick={() => sortByName('desc')}>Sort Z-A</button>
      <div>
        {pets.map((pet) => (
          <div
            key={pet.id}
            onClick={() => toggleSelect(pet.id)}
            style={{
              border: selected.has(pet.id) ? '2px solid blue' : 'none',
            }}
          >
            <img src={pet.imageUrl} alt={pet.title} />
            <h3>{pet.title}</h3>
            <p>{pet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

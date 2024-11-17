import { useState, useEffect } from 'react';
import { Pet } from '../types/Pet';

const usePets = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://eulerity-hackathon.appspot.com/pets');
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
          const data: Pet[] = await response.json();
          setPets(data);
        } catch (err: unknown) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError('An unknown error occurred');
          }
        } finally {
          setLoading(false);
        }
      };
  
      fetchPets();
  }, []);

  return { pets, loading, error };
};

export default usePets;

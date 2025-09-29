
import { useState, useEffect, useCallback } from 'react';

const FAVORITES_KEY = 'ahmedAlMusallamiFavorites';

const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    try {
      const storedFavorites = localStorage.getItem(FAVORITES_KEY);
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error("Failed to parse favorites from localStorage", error);
    }
  }, []);

  const toggleFavorite = useCallback((id: string) => {
    setFavorites(prevFavorites => {
      const newFavorites = prevFavorites.includes(id)
        ? prevFavorites.filter(favId => favId !== id)
        : [...prevFavorites, id];
      
      try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
      } catch (error) {
        console.error("Failed to save favorites to localStorage", error);
      }
      
      return newFavorites;
    });
  }, []);

  return { favorites, toggleFavorite };
};

export default useFavorites;

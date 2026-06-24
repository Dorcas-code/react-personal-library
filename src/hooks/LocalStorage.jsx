import React, {  useState, useEffect } from 'react';

export default function LocalStorage  ({bookID})  {

const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

   // 2. Sync state changes to localStorage whenever the favorites array updates
    useEffect(() => {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

     // 3. Handle adding and removing items from the favorites list
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      // Remove item if it's already favorited
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      // Add item if it's not favorited
      setFavorites([...favorites, id]);
    }
  };
return (
  
 <button 
                onClick={() => toggleFavorite({bookID})}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '20px',
                  color:  favorites.includes({bookID}) ? 'red' : 'gray'
                }}
              >
                { favorites.includes({bookID})  ? '❤️' : '🖤'}
  </button>
 
);
}


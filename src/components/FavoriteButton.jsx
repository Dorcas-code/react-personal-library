import React, {  useState, useEffect } from 'react';

export default function FavoriteButton  ({bookID})  {

const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  // const isFavorited = favorites.includes(bookID);
   const isFavorited = favorites.includes(bookID);
     
   // 2. Sync state changes to localStorage whenever the favorites array updates

     // 3. Handle adding and removing items from the favorites list
  const toggleFavorite = (bookID) => {
   const saved = JSON.parse(localStorage.getItem('favorites')) || [];
 
  let updatedFavorites;

    if (isFavorited ) {
      // Remove item if it's already favorited
      // setFavorites(favorites.filter((favId) => favId !== bookID));
     updatedFavorites = saved.filter(fav => fav !== bookID);
    } else {
      // Add item if it's not favorited
      updatedFavorites = [...saved, bookID];
    }
        setFavorites(updatedFavorites);
  };

  
    useEffect(() => {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

  


return (
  
 <button 
                onClick={()=> toggleFavorite(bookID)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '20px',
          
                }}
              >
                { isFavorited  ? '❤️' : '🖤'}
  </button>
 
);
}


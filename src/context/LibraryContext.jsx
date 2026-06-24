import { createContext, useContext, useState,useEffect  } from 'react';
import useAPI from "../hooks/useAPI";

//1. Createing the context
const LibraryContext = createContext([]);

// 2. Context Provider Component
export const LibraryProvider = ({ children }) => {
    

const apiKey = import.meta.env.VITE_MY_API_KEY;
const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:Harry-Potter&key=${apiKey}`;


 const [books, setBooks] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
    
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
        
          setBooks(data.items);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    }, [url])


  return (
    <LibraryContext.Provider value={{books, isLoading, error}}>
        {children}
        </LibraryContext.Provider>
  );
};

// 3. Custom Hook Pattern
export const useLibrary = () => {
  const context = useContext(LibraryContext);
  if (!context) {
    throw new Error("useLibrary must be used within LibraryProvider");
  }
  return context;
};

export default LibraryContext;

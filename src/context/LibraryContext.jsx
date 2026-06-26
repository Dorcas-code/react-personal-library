import { createContext, useContext, useState,useEffect  } from 'react';
import useAPI from "../hooks/useAPI";

//1. Createing the context
const LibraryContext = createContext();

// 2. Context Provider Component
export const LibraryProvider = ({ children }) => {
    
  const [value, setValue] = useState(() => localStorage.getItem('favorites') || '');

  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem('sharedData', newValue);
  };

  return (
    <LibraryContext.Provider value={{value, updateValue}}>
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

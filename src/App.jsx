import { HashRouter, Routes, Route } from 'react-router-dom';
import LibraryPage from "./pages/Library";
import  ItemDetailsPage from "./pages/ItemDetails";
import FavoriteBookPage from "./pages/Favorites";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { LibraryProvider, useLibrary } from "./context/LibraryContext";
import Library from "./components/Library";
import "./App.css";


import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from "./components/Navigation";

function App() {
  return (
    <>

        <LibraryProvider>
               <ThemeProvider>
<HashRouter>
      <Routes>
 
          <Route path="/" element={<LibraryPage />} >
       
            <Route path="/FavoriteBookPage" element={<FavoriteBookPage />} />
                <Route path='/book/:id' element={<ItemDetailsPage />} />
          </Route>
      </Routes>
</HashRouter>
  
        </ThemeProvider>
      </LibraryProvider>

    </>
  );
}

export default App;

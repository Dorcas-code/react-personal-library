import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import LibraryPage from "./pages/Library";
import ItemDetailsPage from "./pages/ItemDetails";
import FavoriteBookPage from "./pages/Favorites";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { LibraryProvider, useLibrary } from "./context/LibraryContext";
import Library from "./components/Library";
import "./App.css";


import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from "./components/Navigation";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LibraryPage />}>
      <Route index element={<LibraryPage />} />

      <Route path="FavoriteBookPage" element={<FavoriteBookPage />} />
       <Route path='book/:id' element={<ItemDetailsPage />} />
    </Route>
  )
)
function App() {

  return (
    <>
           <RouterProvider router={router}>
        <LibraryProvider>
               <ThemeProvider>

        


        </ThemeProvider>
      </LibraryProvider>
      </RouterProvider>

    </>
  );
}

export default App;

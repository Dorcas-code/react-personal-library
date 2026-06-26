
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import { createHashRouter, RouterProvider } from 'react-router-dom';
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
  const router = createHashRouter([
  {
    path: '/#',
    element: <LibraryPage />,
  },
  {
    path: '/#/FavoriteBookPage',
    element: <FavoriteBookPage />,
  },
    {
    path: '/#/book/:id',
    element: <ItemDetailsPage  />,
  },
]);
  return (
    <>
        <LibraryProvider>
               <ThemeProvider>
                    <RouterProvider router={router} />

{/* <Router basename="/react-personal-library"> */}
{/* <Navigation></Navigation> */}
    {/* <Routes>
        <Route path={`/FavoriteBookPage`}>
            <FavoriteBookPage>
                </FavoriteBookPage>
        </Route>
        <Route path={`/book/:id`}>
            <ItemDetailsPage></ItemDetailsPage>
        </Route>
    </Routes> */}
          {/* <Routes >
          <Route path="/" element={<LibraryPage />} >
       
            <Route path="/FavoriteBookPage" element={<FavoriteBookPage />} />
                <Route path='/book/:id' element={<ItemDetailsPage />} />
           </Route>
      </Routes> */}

      {/* </Router> */}
        </ThemeProvider>
      </LibraryProvider>
    </>
  );
}

export default App;

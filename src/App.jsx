
import { HashRouter as Router, Routes, Route} from "react-router-dom";
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
<Router >
<Navigation></Navigation>
    <Routes>
        <Route path={`/FavoriteBookPage`}>
            <FavoriteBookPage>
                </FavoriteBookPage>
        </Route>
        <Route path={`/book/:id`}>
            <ItemDetailsPage></ItemDetailsPage>
        </Route>
    </Routes>
          {/* <Routes>
          <Route path="/" element={<LibraryPage />} >
       
            <Route path="/react-personal-library/FavoriteBookPage" element={<FavoriteBookPage />} />
                <Route path='/react-personal-library/book/:id' element={<ItemDetailsPage />} />
           </Route>
      </Routes> */}

      </Router>
        </ThemeProvider>
      </LibraryProvider>
    </>
  );
}

export default App;

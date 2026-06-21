
import {BrowserRouter,  Route, Routes } from "react-router";
import LibraryPage from "./pages/Library";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Library from "./components/Library";
import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
        <ThemeProvider>
        <BrowserRouter>
      <Routes>
 
          <Route path="/" element={<LibraryPage />} />
       
      </Routes>
  <Library/>

      <Navigation />
      </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;

import { useNavigate } from "react-router";
import { useTheme } from "../context/ThemeContext";
import Navigation from "../components/Navigation";
import SearchResults from "../components/SearchResults";
import ThemeToggleButton from "../components/ThemeToggleButton";

export default function LibraryPage() {
    const { theme, toggleTheme } = useTheme();
  return (
 <>

          <div  style={{

                             width:"100%",
                             height:"100vh",
                           
                  backgroundColor: theme === "light" ? "black" : "white"
                }}>
           
        <Navigation />
        <h1  style={{
                color: theme === "light" ? "white" : "black"
                }}>Home Page</h1>
               <SearchResults/>
         </div>
        
  

   
</>
  );
}

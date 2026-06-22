import { useNavigate } from "react-router";
import { useTheme } from "../context/ThemeContext";
import Navigation from "../components/Navigation";
import ThemeToggleButton from "../components/ThemeToggleButton";

export default function FavoriteBookPage() {
    const { theme, toggleTheme } = useTheme();
  return (
 <>

    <div  style={{
          display: "flex",
           justifyContent:"space-between",
          width: "100%",
          height: "100vh",
          background: theme === "light" ? "white" : "black",
        }}>
            <h1 style={{
       
       color: theme === "light" ? "black" : "white",
        }}>Favorite Book</h1> 
           
        <Navigation />
         <ThemeToggleButton /> 
        
    
 

    </div>
</>
  );
}

import { useNavigate } from "react-router";
import { useTheme } from "../context/ThemeContext";
import Navigation from "../components/Navigation";


export default function LibraryPage() {
    const { theme, toggleTheme } = useTheme();
  return (
 <>

    <div  style={{
          display: "block",
 
          width: "100%",
          height: "100vh",
          background: theme === "light" ? "white" : "black",
        }}>
            <h1>Home</h1> 
           
      
        
            <div
              onClick={() => toggleTheme()}
              style={{
                border: "1px solid gray",
                position: "realtive",
                width: "40px",
                height: "20px",
                background: theme === "light" ? "white" : "black",
              }}
            >
              <div
                style={{
                  position: "relative",
                  top: "1px",
                  left: theme === "light" ? "1px" : "21px",
                  width: "16px",
                  height: "16px",
                  background: theme === "light" ? "black" : "white",
                }}
              ></div>
            </div>
              <div>
          </div>
 

      <Navigation />
    </div>
</>
  );
}

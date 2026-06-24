import React, {  useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import { useTheme } from "../context/ThemeContext";
import Navigation from "../components/Navigation";
import SearchResults from "../components/SearchResults";
import Library from "../components/Library";
import useAPI from "../hooks/useAPI";
import ThemeToggleButton from "../components/ThemeToggleButton";
import { Circles } from 'react-loader-spinner';

export default function LibraryPage() {
    const { theme, toggleTheme } = useTheme();
    const [term, setTerm] = useState('Anything');
    
    const apiKey = import.meta.env.VITE_MY_API_KEY;


  return (
 <>

          <div  style={{

                             width:"100%",
                             height:"100vh",
                           
                  backgroundColor: "white"
                }}>
           
        <Navigation />
        {/* <h1  style={{
                color: theme === "light" ? "white" : "black"
                }}>Home Page</h1> */}
             
                 <Library />
         </div>
        

   
</>
  );
}

import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import { useTheme } from "../context/ThemeContext";
import Navigation from "../components/Navigation";
import ThemeToggleButton from "../components/ThemeToggleButton";
import { useLibrary} from "../context/LibraryContext";
import ListGroup from 'react-bootstrap/ListGroup';


export default function FavoriteBookPage() {
  const [books, setBooks] = useState([]);
  const [ datas, setDatas] = useState([]);
    const { theme, toggleTheme } = useTheme();
     const { value} =  useLibrary();
const id = value[0];
console.log(typeof(value));
//need to parse the value!
 const apiKey = import.meta.env.VITE_MY_API_KEY;
        useEffect(() => {
        //  value.map((id) => {
          fetch(`https://www.googleapis.com/books/v1/volumes?q=${id}&key=${apiKey}`)
            .then((res) => {
            return res.json();
            })
            .then((data) => {
                setBooks(data.items);
        
            })
          // })
    },[])

  return (
 <>
       <div >
           
        <Navigation />
            <h1>My favorite books</h1>
      
       </div>
</>
  );
}

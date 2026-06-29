import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import { useTheme } from "../context/ThemeContext";
import Navigation from "../components/Navigation";
import ThemeToggleButton from "../components/ThemeToggleButton";
import FavoriteButton from "../components/FavoriteButton";
import { useLibrary} from "../context/LibraryContext";
import ListGroup from 'react-bootstrap/ListGroup';
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import useAPI from "../hooks/useAPI";


export default function FavoriteBookPage() {
  const [books, setBooks] = useState([]);
  const [ datas, setDatas] = useState([]);
  const { theme, toggleTheme } = useTheme();
  const { value} =  useLibrary();
  const ids= JSON.parse(value);
  const checkEmpty = ids.length? true: false;
 const emptyString = "<h4><b>No favorite books yet</b>, please click heart to add favorite books</h4>";

//need to parse the value!

        useEffect(() => {
			const apiKey = "AIzaSyBhmvH2uzrHKWO9jfqdcVashTeEqmd1aWQ";
       ids.map((id) => {
          fetch(`https://www.googleapis.com/books/v1/volumes?q=${id}&key=${apiKey}`)
            .then((res) => {
            return res.json();
            })
            .then((data) => {
                setBooks(data.items);
        
            })
        })
    },[])

  return (
 <>
       <div >
           
        <Navigation />
            <h1>My favorite books</h1>
        <ListGroup variant="flush">
		<div className='book-list'>
			{!checkEmpty ? <p><b>No favorite books yet</b>, please click heart to add favorite books</p> : books.map((book) => (
			
				<ListGroup.Item as="li" key={book.id}>
				
				<div
					key={book.id}
					className='booklist-container'>
						<h4>{book.volumeInfo.title}</h4> 
					
						
							<p >By: {book.volumeInfo.authors} <Link to={`/book/${book.id}`}>

							<button className='btn-readmore'>
								Details
								
							</button>
						

					</Link>
					 </p>
					{/* <div>
						<img
							src={book.volumeInfo.imageLinks.smallThumbnail}
							alt={book.volumeInfo.title}
							style={{ width: '100%', height: '250px' }}
						/>
					</div> */}
			
					
				</div>
				</ListGroup.Item>
			))}
		</div>
		</ListGroup>
       </div>
</>
  );
}

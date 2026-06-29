import React, {  useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import useAPI from "../hooks/useAPI";
import { useLibrary} from "../context/LibraryContext";
import ListGroup from 'react-bootstrap/ListGroup';
import SearchResults from "../components/SearchResults";
import FavoriteButton from "../components/FavoriteButton";

const Library = () => {
const [term, setTerm] = useState('Anything');
 



const apiKey = "AIzaSyBhmvH2uzrHKWO9jfqdcVashTeEqmd1aWQ";

const {data:books,isLoading,error}=useAPI(`https://www.googleapis.com/books/v1/volumes?q=${term}&key=${apiKey}`)
 
return (
	<>
	  <SearchResults  searchBooks={(search) => setTerm(search)}/>
       <ListGroup variant="flush">
		<div className='book-list'>
			{books.map((book) => (
			
				<ListGroup.Item as="li" key={book.id}>
				
				<div
					key={book.id}
					className='booklist-container'>
						<h4>{book.volumeInfo.title}</h4> 
							<FavoriteButton bookID={book.id}/>
						
							<p >By: {book.volumeInfo.authors} <Link to={`/#/book/${book.id}`}>

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
		
		  </>
	);
}

export default Library;
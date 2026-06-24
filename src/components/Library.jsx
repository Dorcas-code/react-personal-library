import React, {  useState, useEffect } from 'react';
import { Link } from "react-router";
import useAPI from "../hooks/useAPI";
import { useLibrary} from "../context/LibraryContext";
import ListGroup from 'react-bootstrap/ListGroup';
const Library = () => {
  const { books } = useLibrary();


   return (
       <ListGroup variant="flush">
		<div className='book-list'>
			{books.map((book) => (
				<ListGroup.Item as="li" key={book.id}>
				<div
					key={book.id}
					className='booklist-container'>
						<h4>{book.volumeInfo.title}</h4>
							<p >By: {book.volumeInfo.authors} <Link to={`/books/${book.id}`}>

							<button className='btn-readmore'>
								Details
								
							</button>

					</Link></p>
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
	);
}

export default Library;
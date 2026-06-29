import React, { useEffect, useState } from 'react';
import Navigation from "../components/Navigation";
import { useParams } from "react-router";



export default function ItemDetailsPage() {
	const [books, setBooks] = useState([]);

  
        useEffect(() => {
				const { id } = useParams();
  
			   const apiKey = "AIzaSyBhmvH2uzrHKWO9jfqdcVashTeEqmd1aWQ";
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${id}&key=${apiKey}`)
            .then((res) => {
            return res.json();
            })
            .then((data) => {
                setBooks(data.items);
				
			})
    },[])
	return (
		<>
	<Navigation />
				<div className='bookdetail'>
					{books.map((book) => (
						<div key={book.id} className='bookdetail-container'>
							<div>
								<img
									src={book.volumeInfo.imageLinks.smallThumbnail}
									alt={book.volumeInfo.title}
									style={{ width: '500px', height: 'auto', padding: '20px' }}
								/>
							</div>
							<div className='ml-8 leading-loose'>
								<h5 className='bookdetail-title'>
									Title: {book.volumeInfo.title}
								</h5>
								<p className='font-bold'>
									Subtitle: {book.volumeInfo.subtitle}
								</p>
								<p className='font-bold'>
									Written By: {book.volumeInfo.authors}
								</p>
								<p className='mb-3 font-bold'>
									Book published on:
									{book.volumeInfo.publishedDate}
								</p>
								
								<p className='pt-2 leading-relaxed'>
									<span>
										{book.volumeInfo.description}
									</span>
								</p>
								<a href={book.volumeInfo.infoLink} target='_blank'>
									<button className='btn-bookdetail'>
										Read More About The Book
									</button>
								</a>
							</div>
						</div>
					))}
				</div>
			</>
	);
}


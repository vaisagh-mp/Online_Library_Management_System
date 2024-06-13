import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BrowseCatalog = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/books/');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Library Catalog</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.name} by {book.author} - {book.status ? 'Available' : 'Issued'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseCatalog;

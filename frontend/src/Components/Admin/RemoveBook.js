import React, { useState } from 'react';
import axios from 'axios';

const RemoveBook = () => {
  const [bookId, setBookId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:8000/api/books/${bookId}/`);
      alert('Book removed successfully!');
    } catch (error) {
      console.error('Error removing book:', error);
    }
  };

  return (
    <div>
      <h2>Remove Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Book ID</label>
          <input type="text" value={bookId} onChange={(e) => setBookId(e.target.value)} />
        </div>
        <button type="submit">Remove Book</button>
      </form>
    </div>
  );
};

export default RemoveBook;

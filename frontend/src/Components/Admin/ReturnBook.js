import React, { useState } from 'react';
import axios from 'axios';

const ReturnBook = () => {
  const [transactionId, setTransactionId] = useState('');
  const [bookId, setBookId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8000/api/transactions/${transactionId}/`, {
        transaction_type: 'returned'
      });
      await axios.patch(`http://localhost:8000/api/books/${bookId}/`, {
        status: true
      });
      alert('Book returned successfully!');
    } catch (error) {
      console.error('Error returning book:', error);
    }
  };

  return (
    <div>
      <h2>Return Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Transaction ID</label>
          <input type="text" value={transactionId} onChange={(e) => setTransactionId(e.target.value)} />
        </div>
        <div>
          <label>Book ID</label>
          <input type="text" value={bookId} onChange={(e) => setBookId(e.target.value)} />
        </div>
        <button type="submit">Return Book</button>
      </form>
    </div>
  );
};

export default ReturnBook;

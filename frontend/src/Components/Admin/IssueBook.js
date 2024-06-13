import React, { useState } from 'react';
import axios from 'axios';

const IssueBook = () => {
  const [bookId, setBookId] = useState('');
  const [userId, setUserId] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/transactions/', {
        book: bookId,
        user: userId,
        due_date: dueDate,
        transaction_type: 'borrowed'
      });
      await axios.patch(`http://localhost:8000/api/books/${bookId}/`, {
        status: false
      });
      alert('Book issued successfully!');
    } catch (error) {
      console.error('Error issuing book:', error);
    }
  };

  return (
    <div>
      <h2>Issue Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Book ID</label>
          <input type="text" value={bookId} onChange={(e) => setBookId(e.target.value)} />
        </div>
        <div>
          <label>User ID</label>
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
        </div>
        <div>
          <label>Due Date</label>
          <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        </div>
        <button type="submit">Issue Book</button>
      </form>
    </div>
  );
};

export default IssueBook;

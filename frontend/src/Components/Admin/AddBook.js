import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [availability_status, setAvailabilityStatus] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/books/', {
        name,
        author,
        availability_status
      });
      alert('Book added successfully!');
      setName(''); // Reset the form fields after successful submission
      setAuthor('');
      setAvailabilityStatus(true);
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Author</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          <label>Status</label>
          <input type="checkbox" checked={availability_status} onChange={(e) => setAvailabilityStatus(e.target.checked)} />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;

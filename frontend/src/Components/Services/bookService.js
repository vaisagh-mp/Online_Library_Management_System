import axios from 'axios';

const API_URL = 'http://localhost:8000/api/books/';

const getBooks = () => {
  return axios.get(API_URL);
};

const addBook = (book) => {
  return axios.post(API_URL, book);
};

const removeBook = (bookId) => {
  return axios.delete(`${API_URL}${bookId}/`);
};

const updateBook = (bookId, book) => {
  return axios.patch(`${API_URL}${bookId}/`, book);
};

export default {
  getBooks,
  addBook,
  removeBook,
  updateBook,
};

import axios from 'axios';

const API_URL = 'http://localhost:8000/api/transactions/';

const getTransactions = () => {
  return axios.get(API_URL);
};

const issueBook = (transaction) => {
  return axios.post(API_URL, transaction);
};

const returnBook = (transactionId) => {
  return axios.patch(`${API_URL}${transactionId}/`, { transaction_type: 'returned' });
};

export default {
  getTransactions,
  issueBook,
  returnBook,
};

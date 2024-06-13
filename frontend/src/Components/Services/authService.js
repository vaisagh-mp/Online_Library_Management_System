import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

const login = (username, password) => {
  return axios.post(API_URL + 'token/', { username, password });
};

const register = (username, password, email, contact_number) => {
  return axios.post(API_URL + 'register/', { username, password, email, contact_number });
};

export default {
  login,
  register,
};

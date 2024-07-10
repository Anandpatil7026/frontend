import axios from 'axios';

const API_URL = 'http://localhost:5000/api/books';

export const fetchBooks = (queryParams) => {
  return axios.get(API_URL, { params: queryParams });
};

export const addBook = (book) => {
  return axios.post(API_URL, book);
};

export const deleteBook = (_id) => {
  return axios.delete(API_URL, { data: { _id } });
};

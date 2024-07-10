import React, { useState, useEffect } from 'react';
import { fetchBooks, deleteBook } from '../services/api';
import Book from './Book';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState({});

  useEffect(() => {
    fetchBooks(query).then((response) => setBooks(response.data));
  }, [query]);

  const handleDelete = (id) => {
    deleteBook(id).then(() => {
      setBooks(books.filter((book) => book._id !== id));
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value.trim();
    const author = form.author.value.trim();
    const genre = form.genre.value.trim();
    const rating = form.rating.value.trim();
    
    const searchQuery = {};
    if (title) searchQuery.title = title;
    if (author) searchQuery.author = author;
    if (genre) searchQuery.genre = genre;
    if (rating) searchQuery.rating = rating;

    setQuery(searchQuery);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Book Recommendation System</h2>
      <form onSubmit={handleSearch} style={styles.searchForm}>
        <input type="text" name="title" placeholder="Search by title" style={styles.searchInput} />
        <input type="text" name="author" placeholder="Search by author" style={styles.searchInput} />
        <input type="text" name="genre" placeholder="Search by genre" style={styles.searchInput} />
        <input type="number" name="rating" placeholder="Search by rating" style={styles.searchInput} />
        <button type="submit" style={styles.searchButton}>Search</button>
      </form>
      <div style={styles.bookList}>
        {books.map((book) => (
          <Book key={book._id} book={book} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    margin: '0 auto',
    padding: '20px',
    Width: '200px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5em',
    color: '#333',
    marginBottom: '20px',
  },
  searchForm: {
    marginBottom: '20px',
  },
  searchInput: {
    padding: '10px',
    margin: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: 'calc(20% - 22px)',
  },
  searchButton: {
    padding: '10px 20px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  bookList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    margin: '120px',
    width:'5px',
    
  },

};

export default BookList;

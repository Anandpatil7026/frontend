import React, { useState } from 'react';
import axios from 'axios';

const styles = {
    container: {
        maxWidth: '600px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '5px'
    },
    button: {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    }
};

const AddBook = () => {
    const [book, setBook] = useState({
        title: '',
        author: '',
        genre: '',
        rating: '',
        img: ''
    });

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/books', { ...book, genre: book.genre.split(',') })
            .then(() => setBook({ title: '', author: '', genre: '', rating: '', img: '' }))
            .catch(error => console.error('Error adding book:', error));
    };

    return (
        <div style={styles.container}>
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <input
                    style={styles.input}
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={book.title}
                    onChange={handleChange}
                />
                <input
                    style={styles.input}
                    type="text"
                    name="author"
                    placeholder="Author"
                    value={book.author}
                    onChange={handleChange}
                />
                <input
                    style={styles.input}
                    type="text"
                    name="genre"
                    placeholder="Genre (comma separated)"
                    value={book.genre}
                    onChange={handleChange}
                />
                <input
                    style={styles.input}
                    type="number"
                    name="rating"
                    placeholder="Rating"
                    value={book.rating}
                    onChange={handleChange}
                />
                <input
                    style={styles.input}
                    type="text"
                    name="img"
                    placeholder="Image URL"
                    value={book.img}
                    onChange={handleChange}
                />
                <input
                    style={styles.input}
                    type="text"
                    name="genre"
                    placeholder="ENTER NAME "
                    value={book.genre}
                    onChange={handleChange}
                />
                <button style={styles.button} type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;

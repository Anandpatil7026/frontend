import React from 'react';

const Book = ({ book, onDelete }) => {
  return (
    <div className="book">
      <img style={{
        width:"300px",
      }} src={book.img} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.genre.join(', ')}</p>
      <p>Rating: {book.rating}</p>
      <button onClick={() => onDelete(book._id)}>Delete</button>
    </div>
  );
};

export default Book;

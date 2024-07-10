import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import AddBook from './components/AddBook';


function App() {
  return (
    <>
    <Router>

      <Routes>
          <Route path="/" element={<BookList />}/>
          <Route path="/add" element={<AddBook />}/>


      </Routes>
    </Router>

    </>
  );
}

export default App;
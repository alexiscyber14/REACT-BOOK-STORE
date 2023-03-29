import React, { useState, useEffect } from 'react';
import '../App.css';
import Spina from '../spinner.png';

const ParaStyles = {
  borderLeft: '1px solid #cacaca',
  borderRight: '1px solid #cacaca',
  padding: '0px 10px',
};

const ParaStyles2 = {
  paddingRight: '10px',
};

const ParaStyles3 = {
  paddingLeft: '10px',
};

const Form = () => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    const storedBookList = JSON.parse(localStorage.getItem('bookList'));
    if (storedBookList) {
      setBookList(storedBookList);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const author = event.target.elements.author.value;
    const newBook = { title, author };
    const storedBookList = JSON.parse(localStorage.getItem('bookList'));
    const updatedBookList = storedBookList ? [...storedBookList, newBook] : [newBook];
    localStorage.setItem('bookList', JSON.stringify(updatedBookList));
    setBookList(updatedBookList);
    event.target.reset();
  };

  const handleRemove = (index) => {
    const storedBookList = JSON.parse(localStorage.getItem('bookList'));
    const updatedBookList = storedBookList.filter((_, i) => i !== index);
    localStorage.setItem('bookList', JSON.stringify(updatedBookList));
    setBookList(updatedBookList);
  };
  return (
    <div>
      <div className="book-list">
        {bookList.map((book, index) => (
          <li className="book-list-item" key={index}>
            <div className="list-details">
              <h2 className="book-category">Action</h2>
              <h2 className="book-title">{book.title}</h2>
              <h3 className="book-author">{book.author}</h3>
              <div className="list-detail-buttons">
                <button type="button" style={ParaStyles2}>Comments</button>
                <button type="button" className="m-button" style={ParaStyles} onClick={() => handleRemove(index)}>Remove</button>
                <button type="button" style={ParaStyles3}>Edit</button>
              </div>
            </div>
            <div className="list-details middle">
              <img src={Spina} alt="spinner" className="image-spina" />
              <div className="percentage">
                <h2>87%</h2>
                <h3>completed</h3>
              </div>
            </div>
            <div className="list-details last">
              <h2>current chapter</h2>
              <h3>Chapter 3: &quot;a lesson learned&quot;</h3>
              <button type="button">Update Progress</button>
            </div>
          </li>
        ))}
      </div>
      <div className="formSections">
        <h2 className="add-new">ADD NEW BOOK</h2>
        <div className="FormContainer">
          <form onSubmit={handleSubmit}>
            <input placeholder="Book title" className="AddBook" name="title" type="text" />
            <input placeholder="Author" type="text" className="Author" name="author" />
            <button type="submit">ADD BOOK</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Form;

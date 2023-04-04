import React from 'react';
import '../App.css';
// import Spina from '../spinner.png';
import Form from './Form';
import BookList from './books';

const Home = () => (
  <div className="main">
    <div className="homeContent">
      <BookList />
      <Form />
    </div>
  </div>
);
export default Home;

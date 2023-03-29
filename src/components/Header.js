import React, { useState, useEffect } from 'react';
import '../App.css';

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (window.location.pathname === '/categories') {
      setActiveIndex(1);
    }
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <header>
      <h1>Bookstore CMS</h1>
      <nav>
        <a href="/" className={`routing ${activeIndex === 0 ? 'activated' : ''}`} onClick={(e) => handleClick(0, e)}>Books</a>
        <a href="/categories" className={`routing ${activeIndex === 1 ? 'activated' : ''}`} onClick={(e) => handleClick(1, e)}>Categories</a>
      </nav>
      <div className="userImage">
        <i className="fa fa-user" />
      </div>
    </header>
  );
};

export default Header;

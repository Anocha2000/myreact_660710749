import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // ✨ Import from style folder

const HomePage = () => {
  return(
    <div >
      <h1>Welcome to the jackpot re</h1>
      <p>Your one-stop shop for all your reading needs!</p>
      <Link to="/books" className="btn">Browse Books</Link>
    </div>
  )
};

export default HomePage;
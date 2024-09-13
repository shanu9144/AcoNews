import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import NewsList from './components/NewsList';
import axios from 'axios';
import './App.css';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('headlines');

  useEffect(() => {
    axios.get(`https://news-web-app-backend-oom1.onrender.com/news/${category}`)
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.error("Error fetching news:", error);
      });
  }, [category]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<NewsList articles={articles} />} />
          <Route
            path="/headlines"
            element={<NewsList articles={articles} />}
            onClick={() => setCategory('headlines')}
          />
          <Route
            path="/sports"
            element={<NewsList articles={articles} />}
            onClick={() => setCategory('sports')}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

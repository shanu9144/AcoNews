import React from 'react';
import './Newsitem.css';

const NewsItem = ({ article }) => {
  return (
    <div className="news-item">
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        <div className="news-image">
          <img src={article.image} alt={article.title} />
        </div>
        <div className="news-content">
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <span className="news-date">{new Date(article.publishedAt).toLocaleDateString()}</span>
        </div>
      </a>
    </div>
  );
};

export default NewsItem;

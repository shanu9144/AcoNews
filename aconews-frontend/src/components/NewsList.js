import React from 'react';
import NewsItem from './NewsItem';
import './NewsList.css';

const NewsList = ({ articles }) => {
  return (
    <section className="news-list">
      {articles.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </section>
  );
};

export default NewsList;

const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORTS || 5000;

// Enable CORS for cross-origin requests
app.use(cors());

// GNews.io API key (store your key in .env)
const GNEWS_API_KEY = process.env.GNEWS_API_KEY;
const BASE_URL = 'https://gnews.io/api/v4';

// Function to fetch news from GNews.io API
const fetchNews = async (category) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/top-headlines?category=${category}&lang=en&token=${GNEWS_API_KEY}`
    );
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};


app.get('/news/headlines', async (req, res) => {
  const articles = await fetchNews('general');
  res.json(articles);
});


app.get('/news/sports', async (req, res) => {
  const articles = await fetchNews('sports');
  res.json(articles);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

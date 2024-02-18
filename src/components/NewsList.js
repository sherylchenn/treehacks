import React, { useState, useEffect } from 'react';

const TopArticles = ({ searchQuery, searchIn, category, language }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTopArticles = async () => {
      try {
        const apiKey = '283090685ae648a59441971675d50ddb';
        // Constructing the API URL with additional query parameters
        let apiUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(searchQuery)}&apiKey=${apiKey}`;
        
        // Including searchIn parameter if specified
        if (searchIn) {
            apiUrl += `&searchIn=${encodeURIComponent(searchIn)}`;
          }
        if (category) {
          apiUrl += `&category=${encodeURIComponent(category)}`;
        }
        if (language) {
          apiUrl += `&language=${encodeURIComponent(language)}`;
        }

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === 'ok') {
          setArticles(data.articles.slice(0, 5)); // Get the top 5 articles
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        console.error('Error fetching articles:', error.message);
        setError('Failed to fetch articles');
      }
    };

    fetchTopArticles();
  }, [searchQuery, category, language]); // Run effect whenever any of these dependencies change

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Top Articles</h2>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopArticles;

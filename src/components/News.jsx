import React, { useEffect, useState } from 'react';
import NewsAPI from 'newsapi';
import Navbar from './Navbar';

function NewsComponent() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const newsapi = new NewsAPI('71a5e2cf4b3145a090ff73191e81ead4');

    // Example: Query top headlines from all sources
    newsapi.v2.topHeadlines({
      q: 'bitcoin',
      language: 'en',
      country: 'us'
    })
      .then(response => {
        setArticles(response.articles);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }, []);

  return (
    <div>
      <Navbar/>
      <h1>Latest News</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsComponent;

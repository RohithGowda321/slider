import React, { useState } from 'react';
import axios from 'axios';

function ProcessNews() {
  const [newsArticle, setNewsArticle] = useState('');
  const [sentiment, setSentiment] = useState(null);
  const [error, setError] = useState('');

  const processNews = async () => {
    try {
      const response = await axios.post(
        '/process_news',
        { news_article: newsArticle },
        { headers: { 'Content-Type': 'application/json' } }
      );
      setSentiment(response.data);
      setError('');
    } catch (error) {
      setError('Error processing news article');
    }
  };

  return (
    <div>
      <h2>Process News Article</h2>
      <textarea
        value={newsArticle}
        onChange={(e) => setNewsArticle(e.target.value)}
        placeholder="Enter news article text"
      />
      <button onClick={processNews}>Process News</button>
      {error && <p>{error}</p>}
      {sentiment && (
        <div>
          <pre>{JSON.stringify(sentiment, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default ProcessNews;

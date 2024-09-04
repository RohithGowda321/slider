// src/NewsProcessor.js
import React, { useState } from 'react';
import axios from 'axios';

const NewsProcessor = () => {
  const [newsData, setNewsData] = useState(null);
  const [inputData, setInputData] = useState('');

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare the payload
    const payload = {
      news_article: inputData,
      ticker: "AAPL" // You can replace this with dynamic data if needed
    };

    try {
      const response = await axios.post(
        '/process_news',
        payload,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      
      setNewsData(response.data);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div>
      <h1>News Processor</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={inputData}
          onChange={handleInputChange}
          rows="4"
          cols="50"
          placeholder="Enter your news article here..."
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {newsData && (
        <div>
          <h2>Processed Data:</h2>
          <pre>{JSON.stringify(newsData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default NewsProcessor;

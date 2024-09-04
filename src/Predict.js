import React, { useState } from 'react';
import axios from 'axios';

function Predict() {
  const [ticker, setTicker] = useState('');
  const [newsArticle, setNewsArticle] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState('');

  const predictStockPrice = async () => {
    try {
      const response = await axios.post(
        '/predict',
        { ticker},
        { headers: { 'Content-Type': 'application/json' } }
      );
      setPrediction(response.data);
      setError('');
    } catch (error) {
      setError('Error predicting stock price');
    }
  };

  return (
    <div>
      <h2>Predict Stock Price</h2>
      <input
        type="text"
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
        placeholder="Enter ticker symbol"
      />
      <textarea
        value={newsArticle}
        onChange={(e) => setNewsArticle(e.target.value)}
        placeholder="Enter news article text"
      />
      <button onClick={predictStockPrice}>Predict</button>
      {error && <p>{error}</p>}
      {prediction && (
        <div>
          <pre>{JSON.stringify(prediction, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Predict;

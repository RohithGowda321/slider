import React, { useState } from 'react';
import axios from 'axios';

function FetchData() {
  const [ticker, setTicker] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const fetchStockData = async () => {
    try {
      const response = await axios.get(`/fetch_data?ticker=${ticker}`);
      setData(response.data);
      setError('');
    } catch (error) {
      setError('Error fetching stock data');
    }
  };

  return (
    <div>
      <h2>Fetch Stock Data</h2>
      <input
        type="text"
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
        placeholder="Enter ticker symbol"
      />
      <button onClick={fetchStockData}>Fetch Data</button>
      {error && <p>{error}</p>}
      {data && (
        <div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default FetchData;

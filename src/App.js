import React from 'react';
import FetchData from './FetchData';
import ProcessNews from './ProcessNews';
import Predict from './Predict';
import Carousel from './Carousel';

function App() {
  return (
    <div className="App">
      <h1>Stock Prediction App</h1>
      {/* <FetchData />
      <ProcessNews />
      
      <Predict /> */}

      <Carousel/>
    </div>
  );
}

export default App;

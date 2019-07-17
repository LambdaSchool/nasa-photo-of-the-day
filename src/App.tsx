import React, { useState, useEffect } from 'react';
import './App.scss';

import APOD from './components/APOD';

import Axios from 'axios';

function App() {
  const [apodData, setApodData] = useState();
  const [counter, setCounter] = useState(0);

  function retrieveAPOD() {
    (async () => {
      try {
        setApodData(
          await Axios.get('https://api.nasa.gov/planetary/apod', {
            params: {
              // date: new Date().toISOString().slice(0, 10) // currently a video
              date: '2019-07-15', // this one is an image
              // date: '2019-07-17', // this one is a video
              hd: false,
              api_key: 'DEMO_KEY',
            },
          }),
        );
        console.log(new Date().toISOString().slice(0, 10));
      } catch (e) {
        console.log(e);
      }
    })();
  }
  useEffect(retrieveAPOD, []);
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      {apodData !== undefined ? <APOD data={apodData} /> : <h3>Loading...</h3>}
    </div>
  );
}

export default App;

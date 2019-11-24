import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from 'axios';

import HeaderComponent from './HeaderComponents/HeaderComponent';
import PhotoComponent from './PhotoComponents/PhotoComponent';
import InfoComponent from './InfoComponents/InfoComponent';

function App() {
  const [photo, setPhoto] = useState();
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [explanation, setExplanation] = useState();

  useEffect(() => {
    Axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
     .then(response => {
       console.log(response);
       setPhoto(response.data.url);
       setTitle(response.data.title);
       setDate(response.data.date);
       setExplanation(response.data.explanation);
     })
     .catch(error => console.log(error))
  }, []);

  return (
    <div className="App">
      <HeaderComponent />
      <PhotoComponent url = {photo} />
      <InfoComponent title = {title} date = {date} explanation = {explanation} />
    </div>
  );
}

export default App;

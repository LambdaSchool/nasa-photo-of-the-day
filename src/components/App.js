//Importing React and Hooks
import React, { useState, useEffect } from "react";
//Importing the necesary to fetch the NASA API
import axios from 'axios'
//NASA API
import { BASE_URL, API_KEY } from '../constants'

//Own Components
import Header from '../components/Header'
import SelectMedia from '../components/SelectMedia'


//CSS Styles
import 'normalize.css';
import "../App.css";

function App() {

  const [currentMedia, setCurrentMedia] = useState([])
  // With currentContent we will defined witch Component will be mount on DOM: Media or Info
  const [currentContent, setCurrentContent] = useState('Media')

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then((res) => {
        setCurrentMedia(res.data)
      })
      .catch((err) => {
        console.log('Ups!')
      })
  }, [])


  return (
    <>
      <Header />

      <SelectMedia media_type={currentMedia.media_type} title={currentMedia.title} url={currentMedia.url} />

      {
        currentContent === 'Media'
        ? <button className="btn-see-more" onClick={() => setCurrentContent('Info')}>Mostrar Information</button>
        : <button className="btn-see-more" onClick={() => setCurrentContent('Media')}>Mostrar Media File</button>
      }

    </>


    // <div className="App">
    //   <p>
    //     Read through the instructions in the README.md file to build your NASA
    //     app! Have fun <span role="img" aria-label='go!'>🚀</span>!
    //   </p>
    // </div>
  );
}

export default App;

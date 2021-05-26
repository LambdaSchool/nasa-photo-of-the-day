import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from 'axios'
import Image from './Componants/Image'
import Date from './Componants/Date'
import DatePicker from "./Componants/Date";

function App() {
  const [image, setImage] = useState([])

    useEffect(() => {
      Axios.get(`https://api.nasa.gov/planetary/apod?api_key=wr1FnyMD07lhC4XB4sKEiOswUq9KJKj38egON2FE`)
        .then(response=> {
          setImage(response.data)
        })
        .catch (err => {
          console.log("issue in the image api")
        })
    }, [])

    return (

      <div className="App">
        <Date />
        <Image picture={image} />
        <DatePicker />
      </div>

      
        
    
    )
     
  }

export default App;

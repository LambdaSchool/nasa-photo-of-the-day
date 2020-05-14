import React from "react"
import "./App.css"
import {useState, useEffect} from 'react'
import axios from "axios"

import Header from "./components/header/header.js"
import PostContainer from "./components/PostContainer/PostContainer.js"


function App() {
  const [info, setInfo] = useState({});


  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=wdgMfHqmpIs81ojLq6QzxTYCV9Zkwto17RgzmCtR`)
          .then(res => {
            console.log(res)
            setInfo(res.data)
           
          })
          .catch(err => {
            debugger
          })
        }, []);
  
  
  return (
    <div className="App">
      <Header/>
      <PostContainer title={info.title} url={info.url} date={info.date} explanation={info.explanation} />
    </div>
  );

}
export default App;

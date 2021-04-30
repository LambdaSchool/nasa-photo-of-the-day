import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';



function App() {
  const [data, setData] = useState({});

  useEffect(()=>{
    const getData = () =>{
          axios
              .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
                  .then(res =>{
                    console.log(res)
                    setData(res.data)
              })
                  .catch(err =>{
                    console.log(err)
              })

    }
    getData()
  },[])

  return (
    <div className="App">
      <h1> Nasa OPAD</h1>
      <h4>Made by: Steve Rivera</h4>
      <img src={data.url} alt="there should be space here!"/>
      <p>{data.title}</p>
      <p>{data.date}</p>
      <p>{data.explanation}</p>
    </div>
      );

  };
export default App;

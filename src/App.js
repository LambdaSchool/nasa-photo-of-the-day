import React, {useEffect, useState} from "react";
import "./App.css";
import axios from 'axios';


// axios.get('https://api.nasa.gov/planetary/apod?api_key=kw4li6koQpnaZzFVA75n8NeQFl2B38hxVNrMCSLy')
// .then(response => {
//   console.log(response.data)
// })
// .catch(error => {
//   console.log(error)
// });

function App() {
  const [info, setInfo] = useState([])


  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=kw4li6koQpnaZzFVA75n8NeQFl2B38hxVNrMCSLy')
    .then((response) => {
      setInfo(response.data);
    })
    .catch((error) => {
      console.log(error)
    });
  }, []);

  return (
    <div className="App">
      <h1 id="h1">NASAGRAM</h1>
      <div className="picDiv">
        <div className="pic">
          <img className="picpic" src={info.url}></img>
        </div>
      </div>
      <p> {info.explanation} </p>
      <button>ANOTHER</button>
    </div>
  );
}

export default App;

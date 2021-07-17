import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col } from "reactstrap";
import "./App.css";

export const BASE_URL = "https://api.nasa.gov/planetary/apod";
export const API_KEY = "DEMO_KEY";

function App() {
  const [picOfDay, setPicOfDay] = useState([]);

  const colorStyling = {
    backgroundColor: "black",
    color: "beige",
  };

  const img = {
    maxHeight: 300,
    maxWidth: 300,
  };

  const text = {
    marginLeft: "30%",
    marginRight: "30%",
    paddingBottom: "5rem",
    color: "purple",
  };

  useEffect(() => {
    const getPicOfDay = () => {
      axios
        .get(`${BASE_URL}?api_key=${API_KEY}`)
        .then((res) => {
          console.log(res);
          setPicOfDay(res.data);
        })

        .catch((err) => {
          console.log(err);
        });
    };
    getPicOfDay();
  }, []);

  return (
    <div className="App">
      <Card style={colorStyling}>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <h1>Nasa Photo Of The Day!</h1>
          <img
            src={picOfDay.url}
            alt="Newly Discovered Space Anomaly"
            style={img}
          />
          <div className="text">
            <h2>{picOfDay.title}</h2>
            <h3>{picOfDay.date}</h3>
            <p style={text}>{picOfDay.explanation}</p>
          </div>
        </Col>
      </Card>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaImagecard from "./NasaImagecard";
// import moment from "moment";
// import DatePicker from "react-date-picker";
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function NasaData() {
  //   const [nasaDataArray, setNasaDataArray] = useState([]);
  const [newDate, setNewDate] = useState("");
  const [isLoading, setIsLoading]=useState(false);
  const [nasaData, setNasaData] = useState({
    copyright: "",
    date: "",
    explanation: "",
    hdurl: "",
    media_type: "image",
    service_version: "",
    title: "",
    url: ""
  });

  const handleSubmit = event => {
    event.preventDefault();
    console.log(newDate);
    alert(`Submitting:${newDate}`);
  };

  useEffect(() => {
    console.log("nasa component mounted");
    axios
      .get(
        //    "https://api.nasa.gov/planetary/apod?api_key=OzNA7KGSQNWftbQgC4w9TH8ZmGkFCBO1tqhVLJAY&date=2020-01-20"
        `https://api.nasa.gov/planetary/apod?api_key=OzNA7KGSQNWftbQgC4w9TH8ZmGkFCBO1tqhVLJAY&date=${newDate}`
      )
      .then(response => {
        console.log(response);
        console.log(response.data);
        return setNasaData(response.data);
      })
      .catch(error => {
        console.log("error: ", error);
      }, []);
  }, [newDate]);
  if (!nasaData.hdurl) {
    return (<div>

        <h3>Loading...</h3>
        <Loader
             type="Puff"
             color="#00BFFF"
             height={100}
             width={100}
             timeout={3000} //3 secs
    
          />
    </div>
    )
  } else {
    
      return (
        <div>
          <form action="submit" onSubmit={handleSubmit}>
            <input
            type="date"
              className="new-date-input"
              placeholder="YYYY-MM-DD"
              onChange={event => {
                setNewDate(event.target.value);
              }}
            />
            <button className="date-input">Submit</button>
          </form>
    
          <NasaImagecard nasaData={nasaData} />
        </div>
      );
  }
}

import React from "react";
import Header from "./components/Header";
import Center from "./components/Center";
import { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "./constants";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const dateForm = new Date();

  const [data, setData] = useState([]);
  const [date, setDate] = useState(
    dateForm.getFullYear() +
      "-" +
      ("0" + (dateForm.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + dateForm.getDate()).slice(-2)
  );
  const [daysBehind, setDaysBehind] = useState(0);
  const [isVideo, setIsVideo] = useState(false);

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}&date=${date}`)
      .then((res) => {
        setData(res.data);
        let videoCheck = res.data.url.includes("youtube");
        setIsVideo(videoCheck);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [date]);

  //The two function below are to move the date back one day on button click, currently not working
  function moveDate() {
    setDaysBehind(daysBehind - 1);
  }

  useEffect(() => {
    dateForm.setDate(dateForm.getDate() + daysBehind);
    setDate(
      dateForm.getFullYear() +
        "-" +
        ("0" + (dateForm.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + dateForm.getDate()).slice(-2)
    );
  }, [daysBehind, date, dateForm]);

  return (
    <div>
      <div class="flex flex-col items-center">
        <Header data={data} />
        <img
          class="w-1/12 m-6 "
          src="http://logosvg.com/wp-content/uploads/2016/09/NASA_logo.png"
          alt="NASA Logo"
        />
        <div>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-8"
            onClick={moveDate}
          >
            See Another Day
          </button>
        </div>
        <Center data={data} isVideo={isVideo} />
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { NasaCard } from "../components/NasaCard";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default function NasaPhoto(props) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=SzAoKCd6rTFUztmoHWqnZUdIiXm8aAeKe7ViyXAf"
      )
      .then(res => {
        console.log(res);
        setInfo(res.data);
      })
      .catch(error => {
        console.log("Data is lost in a black hole!", error);
      });
  }, []);

  return (
    <Container className="info">
      <NasaCard
        title={info.title}
        photo={info.url}
        copyright={info.copyright}
        date={info.date}
        explanation={info.explanation}
      />
    </Container>
  );
}

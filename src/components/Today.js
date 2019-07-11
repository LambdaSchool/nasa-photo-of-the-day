import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import MediaCard from "./MediaCard";

const CardContainer = styled.div``;

function Today() {
  const [media, updateMedia] = useState("");
  const apiKey = "HL7Cmszg6ukeCduFdzUnboaD2ummKzuYzfYIyQRL";
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&hd=true`)
      .then(res => updateMedia(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <CardContainer className="today-container">
      <h3>Today's Inspiration</h3>
      <MediaCard media={media} />
    </CardContainer>
  );
}

export default Today;

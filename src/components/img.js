import React from 'react';
import "./img.css";

const Img = props => {
  console.log(props, " is props in Img")
  return (
    <div className="Img-container">
      <img src={props.src} className="img" alt="Space"></img>
    </div>
  );
};


export default Img;
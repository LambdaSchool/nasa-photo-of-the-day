import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./component/Home";
import NasaPhoto from "./component/NasaPhoto";
import "./App.css";

function App() {
  return (
   <BrowserRouter>
    <div>
      <Route component={Home} path="/" exact />
      <Route component={NasaPhoto} path="/nasaphoto" />
      </div>
   </BrowserRouter>
    
  );
}

export default App;

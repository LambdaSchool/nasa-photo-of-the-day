import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'

import { API_KEY, BASE_URL } from './constants/index'

console.log(API_KEY)

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;

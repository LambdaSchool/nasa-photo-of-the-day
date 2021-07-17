import axios from "axios";
import React, { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from "./index";
import { Card } from "reactstrap";
import "./App";

export default function Content(props) {
  const { close, date } = props;
  const [contents, setContents] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(({ data }) => setContents(data))
      .catch((err) => console.log(err));
  }, [date]);

  return (
    <div className="container">
      <Card>
        {contents && (
          <>
            <h2>{date}</h2>
            <img src={contents.url} alt="Newly Discovered Space Phenomenon" />
            <h2>{contents.title}</h2>
            <h3>Copyright: {contents.copyright}</h3>
            <p>Description: {contents.explanation}</p>
          </>
        )}
        <button onClick={close}>Re-entry</button>
      </Card>
    </div>
  );
}

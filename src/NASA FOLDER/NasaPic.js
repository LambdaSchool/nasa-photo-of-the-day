import React, { useState, useEffect } from "react";
import Axios from "axios";
import NasaCard from "./NasaCard";

export default function NasaPic() {
    const [pics, setPic] = useState([]);

    useEffect(() => {
        Axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(response => {
            const pics = response.data;
            console.log("NASA Pictures", pics);
            setPic(pics);
        })
        .catch (error => {
            console.log("The Data is broken dude", error);
        })
    }, []);  
    return (
            <NasaCard
            title={pics.title}
            picture={pics.hdurl}
            date={pics.date}
            description={pics.explanation}
            />
    )
}

import React, {useState, useEffect} from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard"

export default function PhotoList() {
    
    const [photos, setPhotos] = useState([]);
    useEffect (() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=tdUUC5iIwCj935JbOYJlVDUtyShfIKPp2RJGh4CX")
            .then(response => {
                

                let pleaseWork = [response.data]

                console.log(response.data);
                setPhotos(pleaseWork);
               
                
            })
            .catch(error => {
                console.log("somethin went wrong, bucko", error);
            })
    }, []);
    return (
        <div className ="photo">
            {photos.map (photo => {
                return <PhotoCard date={photo.date}
                explanation={photo.explanation}
                url={photo.url}/>
            })}
        </div>
    );
    
    
}
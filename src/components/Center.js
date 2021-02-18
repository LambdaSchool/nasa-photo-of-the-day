import React from "react";
import { useState } from "react";

const Center = (props) => {
  const { data, isVideo } = props;
  const [showDesc, setshowDesc] = useState(false);

  return (
    <div class="flex flex-col items-center">
      <h2 class="m-1 text-xs ">{data.title}</h2>
      <div class="border flex .justify-center">
        {isVideo ? (
          <iframe
            title="videoMain"
            width="560"
            height="315"
            src={data.url}
            frameborder="0"
            allowFullScreen
          ></iframe>
        ) : (
          <img class="w-full" src={data.url} alt="NASA of the day" />
        )}
      </div>
      {!showDesc ? (
        <button
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l m-8"
          onClick={() => setshowDesc(!showDesc)}
        >
          Show Description
        </button>
      ) : (
        <button
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l mx-4 shadow-lg"
          onClick={() => setshowDesc(!showDesc)}
        >
          Hide Description
        </button>
      )}
      {showDesc && <div class="m-8"> {data.explanation} </div>}
    </div>
  );
};

export default Center;

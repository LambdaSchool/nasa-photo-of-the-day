import React from "react";

const Header = (props) => {
  const { data } = props;

  return (
    <div>
      <div class="flex justify-between items-center w-screen">
        <h1 class="text-red-500 text-4xl font-bold	ml-6">
          {" "}
          NASA's Photo of the day{" "}
        </h1>
        <span class="text-red-500 mr-4">{data.date}</span>
      </div>
    </div>
  );
};

export default Header;

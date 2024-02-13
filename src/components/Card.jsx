import React, { useState } from "react";

function Card({ id, image, info, price, name, removeTour, onlyTour }) {
  const [readMore, setreadMore] = useState(false);
  const description = readMore ? info : `${info.substring(0, 200)}...`;

  function readMoreHandler() {
    setreadMore(!readMore);
  }
  return (
    <>
      <div className="w-[300px] h-auto m-4 p-4 flex flex-col rounded-[10px] shadow-custom ">
        <img
          src={image}
          alt=""
          className="w-[380px] aspect-square object-cover"
        />
        <div className="mt-[20px] mb-[20px] mx-[5px] mt">
          <div>
            <p className="text-green-500 text-2xl font-bold">₹ {price}</p>
            <h3>{name}</h3>
          </div>

          <p>
            {description}{" "}
            <span
              onClick={readMoreHandler}
              className="text-blue-700 cursor-pointer"
            >
              {readMore ? " Show Less" : "Read More"}
            </span>
          </p>
          <div className="flex flex-col">
            <button
              onClick={() => removeTour(id)}
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Not Intrested
            </button>
            <button
              onClick={() => onlyTour(id)}
              className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Only you!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

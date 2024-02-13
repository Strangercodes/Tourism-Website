import React from "react";
import Card from "./Card";

function Tours({ tours, removeTour, onlyTour }) {
  return (
    <>
      <div className="flex items-center flex-col">
        <div>
          <h1 className="py-2 px-8 text-center m-6 sm:text-2xl md:text-5xl border-4 border-blue-600 border-dashed rounded-[20px] ">
            Travel with Harshal
          </h1>
        </div>

        <div className="max-w-[1300px]  flex flex-wrap items-center justify-center">
          {/* Good practice: wherever you are run map() on list u should use uniique id */}
          {tours.map((tour) => {
            return (
              <Card
                key={tour.id}
                {...tour}
                removeTour={removeTour}
                onlyTour={onlyTour}
              ></Card>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Tours;

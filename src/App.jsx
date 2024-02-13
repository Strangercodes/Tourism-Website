import { useState } from "react";
import Tours from "./components/Tours";
import data from "./data";
import "./App.css";

function App() {
  const [tours, setTour] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id != id);
    setTour(newTours);
  }
  function onlyTour(id) {
    const newTours = tours.filter((tour) => tour.id == id);
    setTour(newTours);
  }

  if (tours.length === 0) {
    return (
      <>
        <div className="text-center space-y-5">
          <h2 className=" ">No Tour Left</h2>
          <button
            onClick={() => {
              setTour(data);
            }}
            className="w-1/4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Refresh
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <Tours
          tours={tours}
          removeTour={removeTour}
          onlyTour={onlyTour}
        ></Tours>
      </div>
    </>
  );
}

export default App;

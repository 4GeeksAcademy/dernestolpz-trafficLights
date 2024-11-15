import React, { useState } from "react";
import { TrafficLight } from "./TrafficLight";

const Home = () => {
  const [color, setColor] = useState("red");


  const handleSetColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className="App">

      <TrafficLight color={color} handleSetColor={handleSetColor} />
    </div>
  );
};

export default Home;

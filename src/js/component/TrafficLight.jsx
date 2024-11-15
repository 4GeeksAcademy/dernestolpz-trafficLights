import React from "react";

export const TrafficLight = ({ color, handleSetColor }) => {
    return (
        <div className="traffic-light">

            <div
                className={`light red ${color === "red" ? "on" : ""}`}
                onClick={() => handleSetColor("red")}
            ></div>

            <div
                className={`light yellow ${color === "yellow" ? "on" : ""}`}
                onClick={() => handleSetColor("yellow")}
            ></div>


            <div
                className={`light green ${color === "green" ? "on" : ""}`}
                onClick={() => handleSetColor("green")}
            ></div>
        </div>
    );
};



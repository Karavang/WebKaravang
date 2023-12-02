import React from "react";
import line from "../img/SVG/line.svg";
import Image from "next/image";
const Line = () => {
  return (
    <div className="line-container">
      <Image
        className="line"
        src={line}
        alt="Line"
      />
    </div>
  );
};

export default Line;

// <div className="line"></div>

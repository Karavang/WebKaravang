import Image from "next/image";
import React from "react";
import heroGif from "../img/hero.gif";
import draken from "../img/draken.gif";

export const Hero = () => {
  return (
    <div className="container iam-pos aicenter">
      <Image
        src={heroGif}
        className="gifHero"
        alt="hero"
      />
      <div className=" pos-hero">
        <div className="iam-pos">
          <h2 className="myname">YEVHENII SHESTAK</h2>
          <p>Fullstack developer(Frontend & Backend)</p>
        </div>
        <Image
          src={draken}
          alt="My photo"
          width={128}
        />
      </div>
    </div>
  );
};

import Image from "next/image";
import heroGif from "../img/hero.webp";
import draken from "../img/draken.webp";

export const Hero = () => {
  return (
    <div className="container iam-pos aicenter" id="top">
      <Image
        src={heroGif}
        className="gifHero"
        alt=""
        sizes="80vw"
        priority
      />
      <div className="pos-hero">
        <div className="iam-pos">
          <h1 className="myname">YEVHENII SHESTAK</h1>
          <p>Fullstack developer (Frontend &amp; Backend)</p>
        </div>
        <Image src={draken} alt="Yevhenii Shestak" width={128} height={95} />
      </div>
    </div>
  );
};

import Image from "next/image";
import Link from "next/link";
import shetagri from "../img/shetagri.png";
import lagvilava from "../img/lagvilava.png";
import power from "../img/power.png";
export const MyWorks = () => {
  const works = [
    {
      name: "Shetagri",
      img: shetagri,
      link: "https://shetagri.onrender.com",
      text: "Web-application for psychologist That’s my solo project. I made design, back-end and front-end to order",
    },
    {
      name: "Lagvilava",
      img: lagvilava,
      link: "https://lagvilava.onrender.com",
      text: "Web application for a carpentry company. I've been a designer, front-end developer and back-end developer. I wrote this application in 2 days",
    },
    {
      name: "Power Pulse",
      img: power,
      link: "https://kondyan2022.github.io/project-fs191023-fe/welcome",
      text: `Application for sport tranings Back-End - end points /exercises/exerciseGroups, /exercises/search and /diary/{date} ; development of documentation using swagger.Front-end - Exercises modal window and him service`,
    },
  ];
  return (
    <div
      className="list-works"
      id="myProjects"
    >
      <h1>List of my works</h1>
      <ul>
        {works.map((work) => (
          <li key={work.name}>
            <Link
              href={work.link}
              className="link"
            >
              <Image
                src={work.img}
                className="imagePreview"
                alt="shetagri"
              />
              <h2>{work.name}</h2>
              <p>{work.text}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

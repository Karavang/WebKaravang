import Link from "next/link";
export const MyWorks = async () => {
  const data = [
    {
      title: "Leser",
      domain: ".cloud",
      stack: "[React, Node.js, Axios, Scss, MongoDB, AWS S3, VPS]",
      desc: "Online read with opensource library of books written in Node.js, React.js, AWS S3 and MongoDB. Running on a VPS server with Docker.",
    },
    {
      title: "Shetagri",
      domain: ".com",
      stack: "[React, Axios, Sass, Node.js MongoDB, VPS]",
      desc: "Web-application for psychologist ",
    },
  ];
  return (
    <div
      className="list-works"
      id="myProjects"
    >
      <h3 className="title-section">My projects</h3>
      <ul>
        {data.map((e) => (
          <li key={data[e]}>
            <Link href="https://shetagri.com">
              {e.title}
              <span>{e.domain}</span>
            </Link>
            <h4>{e.stack}</h4>
            <p>{e.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

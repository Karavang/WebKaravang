import Link from "next/link";
export const MyWorks = async () => {
  return (
    <div
      className="list-works"
      id="myProjects"
    >
      <h1>My projects</h1>
      <ul>
        <li>
          <Link href="https://shetagri.com">
            Shetagri<span>.com</span>
          </Link>
          <p>
            [React, Axios, Sass, Node.js MongoDB]
            <br /> Web-application for psychologist <br />
          </p>
        </li>
        <li>
          <Link href="https://leser.cloud">
            Leser<span>.cloud</span>
          </Link>
          <p>
            Online read with opensource library of books written in Node.js,
            React.js, AWS S3 and MongoDB. Running on a VPS server with Docker.
          </p>
        </li>
      </ul>
    </div>
  );
};

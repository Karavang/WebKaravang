const projects = [
  {
    title: "Leser",
    domain: ".cloud",
    link: "https://leser.cloud",
    stack: ["React", "Node.js", "Axios", "Sass", "MongoDB", "AWS S3", "VPS"],
    desc: "Online reader with an open-source library of books, written in Node.js, React and MongoDB with AWS S3 storage. Runs on a VPS in Docker.",
  },
  {
    title: "Shetagri",
    domain: ".com",
    link: "https://shetagri.com",
    stack: ["React", "Axios", "Sass", "Node.js", "MongoDB", "VPS"],
    desc: "Web application for a psychologist: booking, articles and a private client area.",
  },
];

export const MyWorks = () => {
  return (
    <section className="list-works" id="myProjects">
      <h2 className="title-section">My projects</h2>
      <ul>
        {projects.map((p) => (
          <li key={p.link}>
            <a href={p.link} target="_blank" rel="noopener noreferrer">
              {p.title}
              <span>{p.domain}</span>
            </a>
            <h3>[{p.stack.join(", ")}]</h3>
            <p>{p.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

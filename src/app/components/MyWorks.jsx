import { existsSync } from "node:fs";

const projects = [
  {
    title: "Leser",
    domain: ".karavang.com",
    link: "https://leser.karavang.com",
    shot: "leser",
    stack: ["Rust", "Axum", "PostgreSQL", "React", "Vite", "Sass", "Docker", "Nginx"],
    desc: "Online library and reader: shared catalog, personal shelf, one reader for EPUB, PDF, TXT, Markdown and more, reading position synced across devices. Rust API on Axum with PostgreSQL, React frontend, runs on a VPS in Docker.",
  },
  {
    title: "Shetagri",
    domain: ".karavang.com",
    link: "https://shetagri.karavang.com",
    shot: "shetagri",
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
            {/* ponytail: screenshots are taken daily by CI; missing file = site was down, skip the image */}
            {existsSync(`public/screens/${p.shot}.png`) && (
              <img src={`/screens/${p.shot}.png`} alt={`${p.title} screenshot`} loading="lazy" />
            )}
            <h3>[{p.stack.join(", ")}]</h3>
            <p>{p.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

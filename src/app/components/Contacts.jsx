// ponytail: hardcoded list — a CMS for 3 links is not a thing
const links = [
  { label: "Email", href: "mailto:shestakevgeny10@gmail.com", text: "shestakevgeny10@gmail.com" },
  { label: "GitHub", href: "https://github.com/Karavang", text: "github.com/Karavang" },
];

export const Contacts = () => {
  return (
    <section className="container contacts" id="contacts">
      <h2 className="title-section">Contacts</h2>
      <ul>
        {links.map((l) => (
          <li key={l.href}>
            <span>{l.label}</span>
            <a
              className="link"
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
            >
              {l.text}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

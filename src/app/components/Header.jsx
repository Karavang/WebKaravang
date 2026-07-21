import Image from "next/image";
import Link from "next/link";
import logo from "../img/logo.webp";

export const Header = () => {
  return (
    <header className="header">
      <Link href="#top" aria-label="Home">
        <Image src={logo} alt="Karavang logo" width={48} height={48} priority />
      </Link>
      <nav>
        <Link href="#work">Work</Link>
        <Link href="#history">History</Link>
        <Link href="#myProjects">Projects</Link>
        <Link href="#contacts">Contacts</Link>
      </nav>
    </header>
  );
};

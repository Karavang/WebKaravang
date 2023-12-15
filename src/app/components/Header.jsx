import Image from "next/image";
import logo from "../img/logo.png";
import Link from "next/link";
export const Header = () => {
  return (
    <div className="header ">
      <ul>
        <li>
          <Image
            src={logo}
            alt="logo"
            width={64}
          />
        </li>
        <li>
          <ul className="havlist">
            <li>
              <Link href="#history">My history</Link>
            </li>
            <li>Skills</li>
            <li>
              <Link href="#myProjects">Projects</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

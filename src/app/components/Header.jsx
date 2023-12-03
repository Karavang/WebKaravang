import Image from "next/image";
import logo from "../img/logo.png";
export const Header = () => {
  return (
    <div className="header">
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
            <li>My history</li>
            <li>Skills</li>
            <li>Projects</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

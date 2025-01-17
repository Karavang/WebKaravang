import Image from "next/image";
import Link from "next/link";
export const MyWorks = async () => {
  return (
    <div
      className="list-works"
      id="myProjects"
    >
      <h1>My projects</h1>
      <ul>
        <li>Shetagri</li>
        <li>Leser</li>
      </ul>
    </div>
  );
};

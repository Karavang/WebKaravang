"use client";

import axios from "axios";
import html2canvas from "html2canvas";
import Image from "next/image";
import Link from "next/link";
export const MyWorks = async () => {
  // const { data } = await axios.get(
  //   "https://api.github.com/users/Karavang/starred",
  // );
  const data = [{}, {}, {}];
  const takeScreenshot = async (url) => {
    // Open the URL in an iframe
    const iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.width = "100%";
    iframe.height = "500px";
    document.body.appendChild(iframe);

    iframe.onload = async () => {
      const canvas = await html2canvas(iframe);
      const screenshot = canvas.toDataURL("image/png");

      // Create download link
      const link = document.createElement("a");
      link.download = "screenshot.png";
      link.href = screenshot;
      link.click();

      // Remove iframe
      document.body.removeChild(iframe);
    };
  };
  const pp = data.map(async (e) => ({
    name: "aboba",
    page: "https://nhentai.net/language/english/",
    ongit: "https://nhentai.net/language/english/",
    img:
      // e.homepage !== "" &&
      takeScreenshot("https://nhentai.net/language/english/"),
  }));
  console.log(pp);

  return (
    <div
      className="list-works"
      id="myProjects"
    >
      <h1>List of my works</h1>
      <ul>
        {pp.map((work) => (
          <li key={work.name}>
            <Link
              href={work.page}
              className="link"
            >
              {work.img ?? (
                <Image
                  src={work.img}
                  className="imagePreview"
                  alt="shetagri"
                />
              )}
              <h2>{work.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

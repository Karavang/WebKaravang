import Link from "next/link";
import React from "react";

export const Work = () => {
  return (
    <div className="work container">
      <h3 className="title-section">Work</h3>
      <p>
        I`m a fullstack developer with 2 years of commercial expirience. I`m
        always been interested in new work expirience, I like learn new
        technologies and programming concepces. My main programming stack is
        Node.js, React.js, AWS tools and NoSQL databases. Also I worked with
        relational databases. I`m still study in university, in
        <Link
          className="link"
          href="https://woolf.university/academics/colleges/2856acd3-c1e1-421c-989e-c7ddbd32b2f2"
        >
          {" "}
          Neoversity{" "}
        </Link>
        by GoIT and Woolf academy, on Master of Science: Data Science and Data
        Analytics.
      </p>
    </div>
  );
};

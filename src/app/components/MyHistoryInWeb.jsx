import Link from "next/link";
import React from "react";

export const MyHistoryInWeb = () => {
  return (
    <>
      <div className="container myhistoryweb">
        <h3 className="title-section">My history in web developmant</h3>
        <p>
          My story in the world of web development started in 2022, with the
          outbreak of war in Ukraine and my move to Poland. Before that, I was
          in college majoring in Software Engineering and didn`t write any
          projects except for academic assignments. There we learned C++ and
          OOP, it gave me a basic understanding of programming languages. With
          the move I decided to start learning the web development stack and I
          haven`t regretted it, I really enjoyed it. I wrote a few projects in
          my studies and a few orders after and at the end of it. One of the
          ones I am proud of is{" "}
          <Link
            href="https://shetagri.onrender.com"
            className="link"
          >
            Shetagri
          </Link>
          . All my solo projects are designed and written by me alone from the
          wishes and descriptions of the customer. Now I am further exploring
          the field of web development, along with doing different orders.
        </p>
      </div>
    </>
  );
};

"use client";

const Line = () => {
  const width = window.innerWidth < 576 ? "10px" : "1.5px";
  const color = window.innerWidth < 576 ? "#6730b9" : "#422163";

  return (
    <div className="line-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920.01 27.5"
      >
        <defs>
          <style>
            {`.cls-1{fill:none;stroke:${color};stroke-miterlimit:10;stroke-width:${width}}`}
          </style>
        </defs>
        <g
          id="\u0421\u043B\u043E\u0439_2"
          data-name="\u0421\u043B\u043E\u0439 2"
        >
          <g
            id="\u0421\u043B\u043E\u0439_1-2"
            data-name="\u0421\u043B\u043E\u0439 1"
          >
            <path
              d="M0 26.41h1270M1313.61 1l-43.35 25.85M1920.01.84 1313.86.75"
              className="cls-1"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Line;

// <div className="line"></div>

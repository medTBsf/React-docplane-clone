import React from "react";
import "./brand.css";

const Brand = ({ bransSvg }) => {
  return (
    <a
      href={bransSvg.link}
      style={{
        display: "inline-block"
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={bransSvg.largeur}
        height="32"
        viewBox="0 0 200 32"
      >
        <path d={bransSvg.path} fill="hsla(0,0%,67%,.7)" className="svg" />
      </svg>
    </a>
  );
};

export default Brand;

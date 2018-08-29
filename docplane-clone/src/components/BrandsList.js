import React from "react";
import Brand from "./Brand";

const BrandsList = ({ bransSvg }) => {
  return bransSvg.map(elt => {
    return (
      <div key={elt.largeur} style={{ marginRight: "20px" }}>
        <Brand bransSvg={elt} />
      </div>
    );
  });
};

export default BrandsList;

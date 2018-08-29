import React from "react";
import Link from "./Link";

const Footer = ({ footerDescription }) => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        color: "#ababab",
        fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif"
      }}
    >
      <span>{footerDescription.countryCount} </span>
      {footerDescription.footerLinks.map((elt, index, footerLinks) => {
        return index < footerLinks.length - 1 ? (
          <span key={elt.country}>
            <Link footLink={elt} />
            <span>, </span>
          </span>
        ) : (
          <span key={elt.country}>
            <span>en </span>
            <Link footLink={elt} />
          </span>
        );
      })}
      <p style={{ marginTop: "10px" }}>
        {footerDescription.footDesc} <br /> {footerDescription.copyRight}
      </p>
    </div>
  );
};

export default Footer;

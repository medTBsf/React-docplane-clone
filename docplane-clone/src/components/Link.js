import React from "react";

const Link = ({ footLink }) => {
  return <a href={footLink.link}>{footLink.country}</a>;
};

export default Link;

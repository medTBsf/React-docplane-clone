import React from "react";
import Service from "./Service";

const ServicesList = ({ ServicesInf }) => {
  return ServicesInf.map(elt => {
    return <Service serInf={elt} key={elt.cible} />;
  });
};

export default ServicesList;

import React from "react";
import { NavItem, NavLink } from "reactstrap";

const NavElt = props => {
  return (
    <NavItem>
      <NavLink
        href={props.infoNav.lien}
        style={
          props.infoNav.isActive ? { color: "#00b39b" } : { color: "#ababab" }
        }
      >
        {props.infoNav.titre}
      </NavLink>
    </NavItem>
  );
};

export default NavElt;

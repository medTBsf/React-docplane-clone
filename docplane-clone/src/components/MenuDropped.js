import React from "react";
import { NavItem, DropdownItem } from "reactstrap";

const MenuDropped = props => {
  return (
    <DropdownItem>
      <NavItem>{props.titre}</NavItem>
    </DropdownItem>
  );
};

export default MenuDropped;

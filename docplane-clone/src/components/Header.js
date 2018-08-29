import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";
import MenuDropped from "./MenuDropped";
import NavElt from "./NavElt";

const Header = ({ toggle, isOpen, headerInfo }) => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        width: "100%",
        padding: "0 6%"
      }}
    >
      <Navbar color="fadded" light expand="md">
        <NavbarBrand href="https://www.docplanner.com/about-us">
          <img
            src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
            alt=""
            style={{ width: "270px", height: "33px" }}
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {headerInfo.navTitles.map(elt => {
              return <NavElt infoNav={elt} key={elt.titre} />;
            })}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{ color: "#ababab" }}>
                {headerInfo.toggleItem}
              </DropdownToggle>
              <DropdownMenu right>
                {headerInfo.toggleMenu.map((elt, index) => {
                  return <MenuDropped key={index} titre={elt} />;
                })}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

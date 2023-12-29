import React from "react";
import {
  NavbarContainer,
  NavList,
  NavItem,
  NavLink,
} from "../StyledComponents/Navbar";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <NavbarContainer>
      <NavList>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
      </NavList>

      <NavList>
        <NavItem>
          <NavLink href="/courses">Courses</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/my-courses">My Courses</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/profile">Profile</NavLink>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;

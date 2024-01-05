import React from "react";
import {
  NavbarContainer,
  NavList,
  NavItem,
} from "../StyledComponents/Navbar";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css"

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <NavbarContainer>
      <NavList>
        <NavItem>
          <Link className={styles.NavLink} to="/">Home</Link>
        </NavItem>
      </NavList>

      <NavList>
        <NavItem>
          <Link className={styles.NavLink} to="/courses">Courses</Link>
        </NavItem>
        <NavItem>
          <Link className={styles.NavLink} to="/my-courses">My Courses</Link>
        </NavItem>
        <NavItem>
          <Link className={styles.NavLink} to="/profile">Profile</Link>
        </NavItem>
        <NavItem>
          <Link className={styles.NavLink} to="/blogs">Blogs</Link>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;

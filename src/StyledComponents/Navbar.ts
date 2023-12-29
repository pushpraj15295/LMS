import styled, { css } from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: #2c3e50;
  padding: 20px 50px;
  display: flex;
  aline-item: center;
  justify-content: center;
  gap: 65%;
`;

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 30px;
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 17px;
  &:hover {
    color: #3498db;
  }
`;

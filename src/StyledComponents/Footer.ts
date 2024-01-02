
import styled, { css } from "styled-components";


export const FooterContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #333;
`;

export const Link = styled.a`
  color: #0066cc;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
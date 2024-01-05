import React from "react";
import { FooterContainer, FooterText, Link } from "../StyledComponents/Footer";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterContainer>
      <FooterText>
        © 2024 Your LMS Name. All rights reserved.&nbsp; | &nbsp;&nbsp;
        <Link
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms of Service
        </Link>{" "}
        |&nbsp;&nbsp;
        <Link
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </Link>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;

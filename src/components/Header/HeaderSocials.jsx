import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiNetlify } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      {" "}
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://netlify.com" target="_blank" rel="noreferrer">
        <SiNetlify />
      </a>
    </div>
  );
};

export default HeaderSocials;

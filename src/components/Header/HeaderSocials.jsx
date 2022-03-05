import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiNetlify } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      {" "}
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <BsGithub />
      </a>
      <a href="https://netlify.com" target="_blank">
        <SiNetlify />
      </a>
    </div>
  );
};

export default HeaderSocials;

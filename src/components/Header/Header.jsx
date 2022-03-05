import React from "react";
import { data } from "../../data";
import { images } from "../../data";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Cta = () => {
  return (
    <div className="cta">
      <a href={data.CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>David Olawale</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Cta />
        <HeaderSocials />

        <div className="me">
          <img src={images.Me} alt="me"  />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

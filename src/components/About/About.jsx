import "./About.css";
import Award from '../../img/award.png'

import React from "react";

const About = () => {
    return (
        <div className="about">
            <div className="about__left">
                <div className="left__card bg"></div>
                <div className="left__card">
                    <img
                        src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className="card__image"
                    />
                </div>
            </div>
            <div className="about__right">
                <h1 className="about__title">About Me</h1>
                <p className="about__sub">
                    It is a long established fact that a reader will be
                    distracted by the readable content.
                </p>
                <p className="about__desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat duis
                    aute irure dolor in reprehende.
                </p>
                <div className="about__award">
                    <img src={Award} alt="award" className="about__award__img" />
                    <div className="about__award__texts">
                        <h4 className="a__award__title">
                            International Design Awards 2021
                        </h4>
                        <p className="a__award__desc">
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur autodit and fugit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

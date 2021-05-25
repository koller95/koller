import React from "react";
import HeroImg from "./HeroImg";

const Hero = () => {
    return (
        <div className="full-screen hero">
            <div className="left-hero">
                <span>I'm</span>
                <h1 className="">
                    <span>julio </span> <span> mariscal</span>
                </h1>
                <button className="btn">
                    <span className="btn__content">Read more now_</span>
                    <span className="btn__glitch"></span>
                    <span className="btn__label">k95</span>
                </button>
            </div>
            <HeroImg />
        </div>
    );
};

export default Hero;

import { Container } from "@material-ui/core";
import React from "react";
import HeroImg from "./HeroImg";

const Hero = () => {
    return (
        <div className="full-screen">
            <Container>
                <div className="hero">
                    <div className="hero-title mb-5">
                        <span className="hero-im">I'm</span>
                        <h1 className="">
                            <span>julio </span> <span> mariscal</span>
                        </h1>
                        <button className="btn hidden">
                            <span className="btn__content">Read more now_</span>
                            <span className="btn__glitch"></span>
                            <span className="btn__label">k95</span>
                        </button>
                    </div>
                    <HeroImg />
                </div>
            </Container>
        </div>
    );
};

export default Hero;

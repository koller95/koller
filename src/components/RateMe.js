import { Container } from "@material-ui/core";
import React from "react";
import HoverRating from "./HoverRating";

const RateMe = () => {
    return (
        <section className="full-screen section-content">
            <div className="d-flex">
                <span className="title-num">05</span>
                <h2 className="titles">rate me</h2>
            </div>
            <Container>
                <ul className="row">
                    <li className="col-md-4 justify-content-center">
                        <h3>html</h3>
                        <HoverRating />
                    </li>
                    <li className="col-md-4 justify-content-center">
                        <h3>css</h3>
                        <HoverRating />
                    </li>
                    <li className="col-md-4 justify-content-center">
                        <h3>javascript</h3>
                        <HoverRating />
                    </li>
                    <li className="col-md-4 justify-content-center">
                        <h3>node js</h3>
                        <HoverRating />
                    </li>
                    <li className="col-md-4 justify-content-center">
                        <h3>react js</h3>
                        <HoverRating />
                    </li>
                    <li className="col-md-4 justify-content-center">
                        <h3>Bootstrap</h3>
                        <HoverRating />
                    </li>
                    <li className="col-md-4 justify-content-center">
                        <h3>MaterializeUI</h3>
                        <HoverRating />
                    </li>
                </ul>
            </Container>
        </section>
    );
};

export default RateMe;

import { Container } from "@material-ui/core";
import React from "react";

const Proyects = () => {
    return (
        <section className="full-screen section-content">
            <div className="d-flex">
                <span className="title-num">02</span>
                <h2 className="titles">proyects</h2>
            </div>
            <Container maxWidth="md">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus fuga, odio eos velit provident, ex accusantium
                    magni nulla fugiat vel voluptas aliquid doloribus eum!
                    Asperiores nam consequatur adipisci ullam corporis?
                </p>
                <button className="btn">
                    <span className="btn__content">Read more now_</span>
                    <span className="btn__glitch"></span>
                    <span className="btn__label">k95</span>
                </button>
            </Container>
        </section>
    );
};

export default Proyects;

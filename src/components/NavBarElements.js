import React from "react";

const NavBarElements = () => {
    return (
        <div className="navbar-elemets">
            <ul className="d-flex align-items-center">
                <li className="navbar-item">
                    <a href="about-me">about me</a>
                </li>
                <li className="navbar-item">
                    <a href="blog">blog</a>
                </li>
                <li className="navbar-item navbar-item-main ">
                    <a href="up">
                        <h2 className="glitch">
                            <span>web</span>
                            <span>developer</span>
                        </h2>
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="proyects">proyects</a>
                </li>
                <li className="navbar-item">
                    <a href="reference">reference</a>
                </li>
            </ul>
        </div>
    );
};

export default NavBarElements;

import React from "react";
import ToggleButton from "./ToggleButton";
import NavBarElements from "./NavBarElements";
import NavIcon from "./NavIcon";
import { Container } from "@material-ui/core";

const NavBar = () => {
    return (
        <div className="fixed">
            <Container maxWidth="lg">
                <nav className="navbar d-flex justify-content-between">
                    <ToggleButton />
                    <NavBarElements />
                    <NavIcon />
                </nav>
            </Container>
        </div>
    );
};

export default NavBar;

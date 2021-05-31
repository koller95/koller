import React from "react";
import ToggleButton from "./ToggleButton";
import NavBarElements from "./NavBarElements";
import NavIcon from "./NavIcon";
import { Container } from "@material-ui/core";
import ToggleMenu from "./ToggleMenu";

const NavBar = () => {
    return (
        <div className="fixed">
            <Container>
                <nav className="navbar d-flex justify-content-between">
                    <ToggleButton />
                    <NavBarElements />
                    <NavIcon />
                </nav>
            </Container>
            <div className="collapse navbar-collapse" id="navBarMenu">
                <ToggleMenu />
            </div>
        </div>
    );
};

export default NavBar;

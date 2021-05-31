import { Container } from "@material-ui/core";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

const ToggleMenu = () => {
    return (
        <div className="bg-dark-blue">
            <Container>
                <div className="container row d-flex">
                    <div className="col-md-4">
                        <h3>Follow me</h3>
                        <FacebookIcon />
                        <InstagramIcon />
                        <TwitterIcon />
                    </div>
                    <div className="col-md-4">
                        <h3>All Category</h3>
                    </div>
                    <div className="col-md-4">
                        <h3>My Sites</h3>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ToggleMenu;

import React from "react";

import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import NotificationsIcon from "@material-ui/icons/Notifications";
import LanguageIcon from "@material-ui/icons/Language";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Button, Menu, MenuItem } from "@material-ui/core";

const NavIcon = () => {
    var sound, notification;
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="d-flex align-items-center">
            <ul className="d-flex nav-icons">
                {sound && (
                    <li>
                        <a href="sound">
                            <VolumeUpIcon />
                        </a>
                    </li>
                )}
                {notification && (
                    <li>
                        <a href="notification">
                            <NotificationsIcon />
                        </a>
                    </li>
                )}
                <li>
                    <Button
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <LanguageIcon />
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>English</MenuItem>
                        <MenuItem onClick={handleClose}>Spanish</MenuItem>
                    </Menu>
                </li>
                <li>
                    <a href="user">
                        <AccountCircleIcon />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default NavIcon;

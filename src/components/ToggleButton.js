import React from "react";

const ToggleButton = () => {
    return (
        <button
            className="toggle-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navBarMenu"
            aria-controls="navBarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span></span>
            <span></span>
        </button>
    );
};

export default ToggleButton;

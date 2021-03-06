import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

// CSS Imports
import "./css/base.css";
import "./css/mybs.css";
import "./css/tags.css";
import "./css/media.css";
import "./css/library.css";
import "./css/glitch.css";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

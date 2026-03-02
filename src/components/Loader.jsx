import React from "react";
import loaderGif from "../assets/giphy1.gif";
import "../assets/css/Loader.css";

const Loader = () => {
    return (
        <div className="loader-container">
            <img src={loaderGif} alt="Cargando..." className="loader-img" />
        </div>
    )
}

export default Loader
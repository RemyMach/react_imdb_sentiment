import React, { useState, useEffect } from "react";
import './Home.css';
import {TextContextProvider} from "../context/TextContext";
import TextChild from "./textChild.component";

function Text() {
    return (
        <div id="home-content">
            <TextContextProvider value={{text: "je suis la data"}}>
                <TextChild />
            </TextContextProvider>
        </div>
    );

}

export default Text;

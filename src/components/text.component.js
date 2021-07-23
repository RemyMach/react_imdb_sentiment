import React, { useState, useEffect } from "react";
import './Home.css';
import {useTextContext} from "../context/TextContext";

function Home() {
    const {text} = useTextContext();
    return (
        <div id="home-content">
            {{text}}
        </div>
    );

}

export default Home

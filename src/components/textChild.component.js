import React, { useState, useEffect } from "react";
import './Home.css';
import {useTextContext} from "../context/TextContext";

function TextChild() {
    const { text } = useTextContext();
    return (
        <h1 >
            {text}
        </h1>
    );

}

export default TextChild;

import React, { useState, useEffect } from "react";
import './Home.css';
import {useTextContext} from "../context/TextContext";
import TextChildChild from "./textChilChild.component";

function TextChild() {
    const { text } = useTextContext();
    return (
        <h1 >
            {text}
            <TextChildChild />
        </h1>
    );

}

export default TextChild;

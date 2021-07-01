import {Film} from "../../models/film.model";
import './StopWord.css';
import React, {useState} from "react";
import Header from "../header/Header.component";
import {TextStopWord} from "./TextStopWord.component";
import Link from "../route/LinkButton.component";

function StopWordReverse({text}) {

    text = text.split(" ").reverse().join(" ");
    return (
        <React.Fragment>
            <Header />
            <h1>Texte inversé</h1>
            {text}
            <h1>Texte reverse sans StopWords</h1>
            {text !== '' ? <TextStopWord text={text}/>: ''}
        </React.Fragment>
    )
}

export default StopWordReverse;

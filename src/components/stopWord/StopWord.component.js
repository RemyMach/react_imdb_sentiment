import {Film} from "../../models/film.model";
import './StopWord.css';
import React, {useEffect, useState} from "react";
import Header from "../header/Header.component";
import {TextStopWord} from "./TextStopWord.component";
import LinkButton from "../route/LinkButton.component";

function StopWord({text, setText}) {
    let [stopWordText, setStopWordText] = useState('');

    useEffect(() => {
        if(stopWordText !== '') {
            setText(stopWordText);
        }

    }, [stopWordText]);

    console.log(text);
    return (
        <React.Fragment>
            <Header />
            <h1>Filtrer les stopWords du texte (Anglais seulement)</h1>
            <textarea
                placeholder="Tapez votre texte"
                rows={20}
                cols={100}
                value={stopWordText}
                onChange={(e) => setStopWordText(e.target.value)}
            />
            <h1>Texte sans stopWords</h1>
            {stopWordText !== '' ? <TextStopWord text={stopWordText}/>: ''}
            <LinkButton href="/reverse" className="start-button">Essayer le texte à l'envers</LinkButton>
        </React.Fragment>
    )
}

export default StopWord;

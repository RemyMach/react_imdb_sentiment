import {Film} from "../../models/film.model";
import './StopWord.css';
import React, {useState} from "react";
import Header from "../header/Header.component";
import {TextStopWord} from "./TextStopWord.component";

function StopWord({setPathUrl}) {
    let [stopWordText, setStopWordText] = useState('');

    const onChange = () => {
        setPathUrl("/details");
    }
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
            <button onClick={() => onChange()}>Essayer le texte à l'envers</button>
        </React.Fragment>
    )
}

export default StopWord;

import React, {useEffect, useState} from "react";

function TextStopWord({content}) {
    let [sentimentFilm, setSentimentFilm] = useState('');

    useEffect( () => {
        if(content !== '') {
            //https://sentim-api.herokuapp.com/
        }
    }, [content]);

    return (
        <p>content</p>
    );
}

export {
    TextStopWord
};

import React, {useEffect, useState} from "react";

function FilmReviewSentiment({content}) {
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
    FilmReviewSentiment
};

import './FilmDetails.css';
import {useEffect, useState} from "react";
import './FilmReview.css';
import {TextStopWord} from "../stopWord/TextStopWord.component";

function FilmReview({ film }) {
    let [reviewsFilm, setReviewsFilm] = useState('');
    let [buttonReviewStopWordMessage, setButtonReviewStopWordMessage] = useState("Voir Critique sans stopWords");
    let [displayReviewStopWord, setDisplayReviewStopWord] = useState(false);

    useEffect(() => {
        if(film.id !== '') {
            fetch(`http://api.themoviedb.org/3/movie/${film.id}/reviews?api_key=bde98089c7cef8c708ca1f4350ecba1a`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data['results'][0])
                    if(data['results'][0] !== undefined)
                        setReviewsFilm(data['results'][0]['content']);
                    else
                        setReviewsFilm('Pas encore de critique pour ce film');
                    console.log(reviewsFilm)
                }).catch((e) => {
                console.log(e);
            });
        }

    }, [film]);

    useEffect(() => {
        if(displayReviewStopWord === true) {
            setButtonReviewStopWordMessage("Voir Critique classique");
        }else {
            setButtonReviewStopWordMessage("Voir Critique sans stopWords");
        }
    }, [displayReviewStopWord])

    const handleStopWordButton = () => {
        setDisplayReviewStopWord(!displayReviewStopWord);
    };

    return (
        <span>
            {
                reviewsFilm !== 'Pas encore de critique pour ce film' ?
                    <button id="stopWord-review-button" onClick={() => handleStopWordButton()}>{buttonReviewStopWordMessage}</button> :
                    ''
            }
            {
                displayReviewStopWord === true ?
                    <TextStopWord text={reviewsFilm} /> :
                    <p>{reviewsFilm}</p>
            }
        </span>
    );
}

export {
    FilmReview
}

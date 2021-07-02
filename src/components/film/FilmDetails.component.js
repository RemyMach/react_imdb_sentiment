import {Film} from "../../models/film.model";
import './FilmDetails.css';
import React, {useEffect, useState} from "react";
import {FilmReview} from "./FilmReview.component";
import star from '../../assets/star_black.svg';
import Header from "../header/Header.component";
import {TextStopWord} from "../stopWord/TextStopWord.component";

function FilmDetails({ films }) {
    let [imageFilm, setImageFilm] = useState('');
    let [displayReview, setDisplayReview] = useState(false);
    let [buttonReviewMessage, setButtonReviewMessage] = useState("Voir la critique");
    let [buttonSummaryStopWordMessage, setButtonSummaryStopWordMessage] = useState("Voir Résumé sans stopWords");
    let [displaySummaryStopWord, setDisplaySummaryStopWord] = useState(false);

    useEffect(() => {
        if(films.id !== '') {
            fetch(`http://api.themoviedb.org/3/movie/${films.id}/images?api_key=bde98089c7cef8c708ca1f4350ecba1a`)
                .then((response) => response.json())
                .then((data) => {
                    //console.log(data['backdrops'][0]['file_path'])
                    setImageFilm('https://image.tmdb.org/t/p/w500/' + data['backdrops'][0]['file_path']);
                }).catch((e) => {
                //console.log(e);
            });
        }

    }, [films]);

    useEffect(() => {
        if(displayReview === true) {
            setButtonReviewMessage("caché la critique");
        }else {
            setButtonReviewMessage("Voir la critique");
        }
    }, [displayReview])

    useEffect(() => {
        if(displaySummaryStopWord === true) {
            setButtonSummaryStopWordMessage("Voir Résumé classique");
        }else {
            setButtonSummaryStopWordMessage("Voir Résumé sans stopWords");
        }
    }, [displaySummaryStopWord])

    const handleReviewButton = () => {

        setDisplayReview(!displayReview);
    }

    const handleStopWordButton = () => {
        setDisplaySummaryStopWord(!displaySummaryStopWord);
    }

    const film = new Film(films.id, films.original_title, films.overview, films.vote_average);
    return (
        <div id="film-details-info">
            <p>{film.title}</p>
            <span id="film-details-image">
                {imageFilm !== '' ? <img alt={film.title} src={imageFilm} /> : ''}
            </span>
            <span id="film-details-summary">
                <span id="film-details-summary-content">
                    <label>Résumé</label>
                    {
                        film.overview !== 'Pas de résumé pour ce film' ?
                            <button id="stopWord-button" onClick={() => handleStopWordButton()}>{buttonSummaryStopWordMessage}</button> :
                            ''
                    }
                </span>
                {
                    displaySummaryStopWord === true ?
                        <TextStopWord text={film.overview}/> :
                        <p>{film.overview}</p>
                }
            </span>
            {film.voteAverage >= 0 && film.voteAverage <= 10 ? <span id="film-detail-rate"><p>{film.voteAverage}/10</p><img className="star" alt="star" src={star}/></span> : <span id="film-detail-rate"><p>{film.voteAverage}</p></span>}
            <div>
                <button id="review-button" onClick={() => handleReviewButton()}>{buttonReviewMessage}</button>
            </div>
            {displayReview === true ? <span><FilmReview film={film}/></span> : ''}
        </div>
    );
}

export default FilmDetails;

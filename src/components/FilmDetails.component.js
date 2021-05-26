import {Film} from "../models/film.model";
import './FilmDetails.css';
import React, {useEffect, useState} from "react";
import {FilmReview} from "./FilmReview.component";
import star from '../assets/star_black.svg';

function FilmDetails({ films }) {
    let [imageFilm, setImageFilm] = useState('');
    let [displayReview, setDisplayReview] = useState(false);
    let [buttonMessage, setButtonMessage] = useState("Voir la critique");

    useEffect(() => {
        if(films.id !== '') {
            fetch(`http://api.themoviedb.org/3/movie/${films.id}/images?api_key=bde98089c7cef8c708ca1f4350ecba1a`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data['backdrops'][0]['file_path'])
                    setImageFilm('https://image.tmdb.org/t/p/w500/' + data['backdrops'][0]['file_path']);
                }).catch((e) => {
                console.log(e);
            });
        }

    }, [films]);

    useEffect(() => {
        if(displayReview === true) {
            setButtonMessage("caché la critique");
        }else {
            setButtonMessage("Voir la critique");
        }
    }, [displayReview])

    const handleReviewButton = () => {

        setDisplayReview(!displayReview);
    }

    const film = new Film(films.id, films.original_title, films.overview, films.vote_average);
    return (
        <div id="film-details-info">
            <p>{film.title}</p>
            <span id="film-details-image">
                {imageFilm !== '' ? <img alt={film.title} src={imageFilm} /> : ''}
            </span>
            <span id="film-details-summary">
                <label>Résumé</label><p>{film.overview}</p>
            </span>
            <span id="film-detail-rate">
                <p>{film.voteAverage}/10</p><img className="star" alt="star" src={star}/>
            </span>
            <div>
                <button id="review-button" onClick={() => handleReviewButton()}>{buttonMessage}</button>
            </div>
            {displayReview === true ? <span><FilmReview film={film}/></span> : ''}
        </div>
    );
}

export default FilmDetails;

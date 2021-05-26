import {Film} from "../models/film.model";
import './FilmDetails.css';
import {useEffect, useState} from "react";
import {FilmReview} from "./FilmReview.component";

function FilmDetails({ films }) {
    let [imageFilm, setImageFilm] = useState('');

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

    const film = new Film(films.id, films.original_title, films.overview, films.vote_average);
    console.log("voila le film");
    console.log(film)
    return (
        <div id="film-details-info">
            <p>{film.title}</p>
            <span id="film-details-image">
                {imageFilm !== '' ? <img alt={film.title} src={imageFilm} /> : ''}
            </span>
            <span className="film-details-summary-note">
                <label>Résumé</label><p>{film.overview}</p>
            </span>s
            <span className="film-details-summary-note">
                <label>Note</label><p>{film.voteAverage}/10</p>
            </span>
            <span>
                <FilmReview film={film} />
            </span>
        </div>
    );
}

export default FilmDetails;

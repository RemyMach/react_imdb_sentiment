import React, { useState, useEffect } from "react";
import './FilmSearch.css';
import FilmDetails from "./FilmDetails.component";
import Header from "../header/Header.component";



function FilmSearch() {
    let [films, setFilms] = useState([]);
    let [filmName, setFilmName] = useState('');


    const buildFilmArray =  films => {
        return films.map(film => {
            if(!film.overview) {
                film.overview = "Pas de résumé pour ce film"
            }
            if(!film.original_title) {
                film.overview = "Pas de titre pour ce film"
            }

            if(!film.vote_average) {
                film.vote_average = "Pas de note pour ce film"
            }
            if(film.id) {
                return film;
            }
        });
    };

    useEffect(() => {
        const abortController = new AbortController();
        const option = { signal: abortController.signal };
        const fetchFilms = () => {
            if(filmName !== '') {
                //console.log(filmName)
                fetch(`https://api.themoviedb.org/3/search/movie?api_key=bde98089c7cef8c708ca1f4350ecba1a&query=${filmName}&page=1`)
                    .then((response) => response.json())
                    .then((data) => {
                        //console.log(data['results'][0])
                        const finalFilmArray = buildFilmArray(data['results']);
                        setFilms(finalFilmArray);
                    }).catch((e) => {
                    //console.log(e);
                });
            }else {
                setFilms([]);
            }
        }

        fetchFilms();

        return () => abortController.abort();

    }, [filmName]);


    return (
        <React.Fragment>
            <Header />
            <span id="content-film-search">
                <p>Quel film recherchez-vous?</p>
                <input className="search-input" value={filmName} onChange={(e) => {setFilmName(e.target.value)}} placeholder="Rechercher un film"/>
            </span>
            <span id="film-details-display">
                {films.length !== 0 ? films.map( film => <FilmDetails films={film} />) : ''}
            </span>
        </React.Fragment>
    );

}

export default FilmSearch;

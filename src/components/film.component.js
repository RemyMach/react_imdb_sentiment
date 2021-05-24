import React, { useState, useEffect } from "react";
import './Home.css';



function Film() {
    let [films, setFilms] = useState();

    const fetchFilms = (name) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=bde98089c7cef8c708ca1f4350ecba1a&query=${name}&page=1`)
            .then((response) => response.json())
            .then((data) => {
                setFilms(data['results']);
            })
    }

    return (
        <React.Fragment>
            <p>Films</p>
            <input className="search-input" value={filmName} onChange={(e) => {setFilmName(e.target.value)}} placeholder="Rechercher un film"/>
        </React.Fragment>
    );

}

export default Film

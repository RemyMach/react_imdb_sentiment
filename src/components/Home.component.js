import React, { useState, useEffect } from "react";
import './Home.css';

function Home() {

    return (
        <div id="home-content">
            <h1 className="home-title">Les différentes API exploités</h1>

            <div className="start-button-content">
                <button id="start-button" onClick={() => window.location.pathname = '/films'}>Start</button>
            </div>

            <div id="films">
                <span className="IMDB-content">
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a href="https://www.themoviedb.org/documentation/api" className="api-title" target="_blank">TMDB</a>
                    <p className="api-desc">l'API IMDB aura pour but de récupérer les informations d'un film recherché. Nom, description, commentaires (si existant), Image</p>
                </span>
                <span className="sentim-content">
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a href="https://sentim-api.herokuapp.com/" className="api-title" target="_blank">Sentim</a>
                    <p className="api-desc">API qui va permettre de savoir si la description est surtout les commentiares sont positif ou négatif</p>
                </span>
            </div>

        </div>
    );

}

export default Home

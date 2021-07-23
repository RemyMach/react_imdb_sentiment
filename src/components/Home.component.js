import React, { useState, useEffect } from "react";
import './Home.css';
import LinkButton from "./route/LinkButton.component";
import TextContext from "../context/TextContext";

function Home() {

    return (
        <div id="home-content">
            <h1 className="home-title">Les différentes API exploités</h1>

            <div className="start-button-content">
                <LinkButton href="/films" className="start-button">Start</LinkButton>
            </div>

            <div id="films">
                <span className="IMDB-content">
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a href="https://www.themoviedb.org/documentation/api" className="api-title" target="_blank">TMDB</a>
                    <p className="api-desc">l'API TMDB aura pour but de récupérer les informations d'un film recherché. Nom, description, commentaires (si existant), Image</p>
                </span>
                <span className="exude-content">
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a href="https://github.com/RemyMach/StopWordApi" className="api-title" target="_blank">Custom Stop Word</a>
                    <p className="api-desc">API qui va permettre de filtrer les stop words du texte, technique très utilisé dans le traitement automatique des langues (catégorisation du sujet principal ...)
                                            Une API que j'ai fait moi-même qui est déployer sur heroku après avoir rencontré des problème de CORS policy avec l'API <a href="http://uttesh.com/exude-api/" className="api-title" target="_blank">Exude</a></p>
                    <div className="start-button-content">
                        <LinkButton class="start-button" href="/stopWords" className="start-button">Essayer seul</LinkButton>
                    </div>
                </span>
            </div>
            <TextContext.Provider value={"je suis une pomme"}>

            </TextContext.Provider>

        </div>
    );

}

export default Home

import './FilmDetails.css';
import {useEffect, useState} from "react";

function FilmReview({ film }) {
    let [reviewsFilm, setReviewsFilm] = useState([]);

    useEffect(() => {
        if(film.id !== '') {
            fetch(`http://api.themoviedb.org/3/movie/${film.id}/reviews?api_key=bde98089c7cef8c708ca1f4350ecba1a`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data['results'][0]['content'])
                    setReviewsFilm(data['results'][0]['content']);
                }).catch((e) => {
                console.log(e);
            });
        }

    }, [film]);

    return (
        <span>
            <p>Critique</p>
            <p>{reviewsFilm}</p>
        </span>
    );
}

export {
    FilmReview
}

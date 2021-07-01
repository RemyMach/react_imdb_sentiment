import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home.component'
import FilmSearch from './components/film/FilmSearch.component'
import StopWord from "./components/stopWord/StopWord.component";
import FilmDetails from "./components/film/FilmDetails.component";
import Route from "./components/route/Route.component";
import StopWordReverse from "./components/stopWord/StopWordReverse.component";

function App() {
    const [text, setText]= useState(null);
    console.log(text)
    return (
        <div className="App">
            <Route path="/">
                <Home />
            </Route>
            <Route path="/films">
                <FilmSearch  />
            </Route>
            <Route path="/stopWords">
                <StopWord text={text} setText={setText}/>
            </Route>
            <Route path="/reverse">
                <StopWordReverse text={text}/>
            </Route>
        </div>
    );
}

export default App;

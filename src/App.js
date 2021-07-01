import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home.component'
import FilmSearch from './components/film/FilmSearch.component'
import StopWord from "./components/stopWord/StopWord.component";
import FilmDetails from "./components/film/FilmDetails.component";

function App() {
    const [activePage, setActivePage] = useState();
    const [path, setPath]= useState(null);

    useEffect(() => {
        const pomme = () => {
            console.log(path)
            if(path === '/details') {
                console.log("on passe par là")
                window.location.pathname = '/details'
            }else if(window.location.pathname === '/details'){
                //window.location.pathname = '';
                console.log("on passe ici aussi")
            }
        }

        pomme();
    }, [path]);


    useEffect(() => {
        const evaluateLocation = () => {
            console.log("on passe dans evaluate")
            if (window.location.pathname === '/') {
                console.log(path)
                setActivePage(<Home  />);
            } else if (window.location.pathname === '/films') {
                setActivePage(<FilmSearch  />);
            } else if (window.location.pathname === '/stopWords') {
                setActivePage(<StopWord setPathUrl={setPath} />);
            } else if(window.location.pathname === '/details') {
                setActivePage(<StopWord setPathUrl={setPath} />);
            }
        }

        evaluateLocation();
    }, [window.location.pathname]);


    return (
        <div className="App">
            {activePage}
        </div>
    );
}

export default App;

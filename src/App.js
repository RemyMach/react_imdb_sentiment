import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home.component'
import FilmSearch from './components/film/FilmSearch.component'
import StopWord from "./components/stopWord/StopWord.component";

function App() {
    const [activePage, setActivePage] = useState();

    useEffect(() => {
        const evaluateLocation = () => {
            if (window.location.pathname === '/') {
                setActivePage(<Home />);
            } else if (window.location.pathname === '/films') {
                setActivePage(<FilmSearch />);
            } else if (window.location.pathname === '/stopWords') {
                setActivePage(<StopWord />);
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

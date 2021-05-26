import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home.component'
import FilmSearch from './components/FilmSearch.component'

function App() {
    const [currentPage, setCurrentPage] = useState();

    useEffect(() => {
        const evaluateLocation = () => {
            if (window.location.pathname === '/') {
                setCurrentPage(<Home />);
            } else if (window.location.pathname === '/films') {
                setCurrentPage(<FilmSearch />);
            }
        }

        evaluateLocation();
    }, [window.location.pathname]);

    return (
        <div className="App">
            {currentPage}
        </div>
    );
}

export default App;

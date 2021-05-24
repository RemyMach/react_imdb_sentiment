import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home.component'
import Film from './components/film.component'

function App() {
    const [currentPage, setCurrentPage] = useState();

    useEffect(() => {
        const evaluateLocation = () => {
            if (window.location.pathname === '/') {
                setCurrentPage(<Home />);
            } else if (window.location.pathname === '/films') {
                setCurrentPage(<Film />);
            }
        }

        evaluateLocation();
    }, [window.location.pathname]);

    return (
        <div className="App">
            <header className="App-header">
                {currentPage}
            </header>
        </div>
    );
}

export default App;

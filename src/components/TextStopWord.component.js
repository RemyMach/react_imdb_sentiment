import React, {useEffect, useState} from "react";

function TextStopWord({text}) {
    let [textFilter, setTextFilter] = useState('');

    useEffect( () => {
        if(text !== '') {

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ data:  text})
            };
            //'https://exude-api.herokuapp.com/exude/stopping/data'
            fetch('http://localhost:8000/texts', requestOptions)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setTextFilter(data['text']);
                }).catch((e) => {
                console.log(e);
            });
        }
    }, [text]);

    return (
        <>
            { textFilter !== '' ?
                <p>{textFilter}</p> :
                ''
            }
        </>
    );
}

export {
    TextStopWord
};

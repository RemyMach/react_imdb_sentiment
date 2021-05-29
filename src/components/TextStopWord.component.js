import React, {useEffect, useState} from "react";

function TextStopWord({text}) {
    let [textFilter, setTextFilter] = useState('');

    useEffect( () => {
        if(text !== '') {

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'mode': 'no-cors' },
                body: JSON.stringify({ data:  text})
            };

            fetch('https://exude-api.herokuapp.com/exude/stopping/data', requestOptions)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setTextFilter(data['data']);
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

import React, {useEffect, useState} from "react";

function TextStopWord({text}) {
    //console.log(text)
    let [textFilter, setTextFilter] = useState('');

    useEffect( () => {
        if(text !== '') {

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ data:  text})
            };
            fetch('https://stop-word-api.herokuapp.com/texts', requestOptions)
                .then((response) => response.json())
                .then((data) => {
                    //console.log(text)
                    //console.log(data);
                    setTextFilter(data['text']);
                }).catch((e) => {
                //console.log(e);
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

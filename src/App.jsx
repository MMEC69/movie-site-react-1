import React from "react";

import {useEffect} from "react";

//Api key: 841d905d 

const API_KEY = "841d905d"

const API_URL = "http://www.omdbapi.com/?apikey=" + API_KEY;



const App = () => {
    

    const searchMovies = async(title) => {
        const response = await fetch (`${API_URL}&s=${title}`);

        const data = await response.json();

        console.log(data);
    }

    searchMovies("Spider man");

    useEffect(
        () => {},
        []
    )
    
    return(
    <>
    
    </>);
}

export default App;
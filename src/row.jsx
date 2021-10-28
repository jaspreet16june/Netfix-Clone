import React from 'react'
import { useState ,useEffect} from 'react'
import axios from "./axios"

function Row({title,fetchURL}) {

    let [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetch(){
            const request = await axios.get(fetchURL);
            console.log(request);
            return request;
        }
        fetch();
    }, [])

    return (
        <div>
         <h2>{title}</h2>   
        </div>
    )
}

export default Row;

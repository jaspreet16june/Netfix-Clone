// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "./axios";

// const baseURL = "https://image.tmdb.org/t/p/original";

// function Row({ title, fetchURL }) {
//   let [movies, setMovies] = useState([]);

//   useEffect(() => {
//     async function fetch() {
//       const request = await axios.get(fetchURL);
//       setMovies(request.data.result);
//       console.log(request);
//       return request;
//     }
//     fetch();
//   }, [fetchURL]);

//   console.log(movies);

//   return (
//     <div className="row">
//       <h2>{title}</h2>
//       <div className="row-posters">
//         {/* {movies.map((movie)=>(
//                  <img className = "row-poster" src={`${baseURL}${movie.poster_path}`} alt= {movie.name}/>
//              ))} */}
//         {movies.map((movie) => (
//           <img
//             key={movie.id}
//             className="row_poster"
//             src={`${baseURL}${movie.poster_path}`}
//             alt={movie.name}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Row;

import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import movieTrailer from "movie-trailer";
import "./css/row.css";
const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchURL,isLargeRow }) {
  let [movies, setMovies] = useState([]);
  let [trailerUrl,setTrailerUrl] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchMovies();
  }, [fetchURL]);

  const opts = {
    height:"390",
    width:"100%",
    playerVars:{
      autoplay:1,
    }
  }
  console.log(movies);

  let handleClick = (movie)=>{
    if(trailerUrl){
      setTrailerUrl("");
    }else{
      movieTrailer(movie?.name || "")
      .then((url)=>{
        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailerUrl(urlParams.get("v"));
    }).catch((error)=>{
      console.log(error);
    })
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick ={()=>{
              handleClick(movie)
            }}
            className={`row_poster ${isLargeRow && "row_largePoster"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            
          />
        ))}
      </div>

      {trailerUrl && <YouTube videoId = {trailerUrl} opts = {opts} />}
    </div>
  );
}

export default Row;

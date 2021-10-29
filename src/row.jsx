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
import axios from "./axios";
import "./css/row.css";
const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchURL,isLargeRow }) {
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchMovies();
  }, [fetchURL]);

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_largePoster"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            
          />
        ))}
      </div>
    </div>
  );
}

export default Row;

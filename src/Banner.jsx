import React from 'react'
import requests from "./request";
import {useEffect,useState} from "react";
import axios from "./axios"
import "./css/banner.css"


const base_url = "https://image.tmdb.org/t/p/original";
function Banner() {
    const [movie, setMovie] = useState([]);

useEffect(() => {
    async function fetchData(){
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length-1)])
        return request;
    }
    fetchData();
}, [])
console.log(1)
console.log(movie)
function truncate(str, n) {
  return str?.length > n ? str.substring(0, n - 1) + "..." : str;
}

    return (
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${base_url}/${movie?.backdrop_path})`,
          backgroundPosition: "top center",
        }}
      >
        <div className="bannerContent">
          {/* title */}

          <h1 className="bannerTitle">
            {movie?.title || movie?.original_name || movie?.name}
          </h1>
          {/* buttons */}
          <div className="bannerButtons">
            <button className="twoButtons">Play</button>
            <button className="twoButtons">My List</button>
          </div>
          {/* description */}
          <h1 className="bannerOverview">{truncate(movie?.overview, 150)}</h1>
        </div>
        <div className="bannerFadeBottom"></div>
      </header>
    );
}

export default Banner;

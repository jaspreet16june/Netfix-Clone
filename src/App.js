import requests from "./request";
import Row from "./row";

let App = ()=> {
  return (
    
    <div className = "App">

    <h1>This is Netflix clone Made By Jaspreet Kaur and my friend</h1>
    <Row title = "Netflix Originals" 
         fetchURL= {requests.fetchNetflixOriginals}
         isLargeRow/>
    <Row title = "Trending" fetchURL = {requests.fetchTrending} />
    <Row title = "Top Rated" fetchURL = {requests.fetchTopRated} />
    <Row title = "Action Movies" fetchURL = {requests.fetchActionMovies} />
    <Row title = "Comedy Movies" fetchURL = {requests.fetchComedyMovies} />
    <Row title = "Horror Movies" fetchURL = {requests.fetchHorrorMovies} />
    <Row title = "Romance Movies" fetchURL = {requests.fetchRomanceMovies} />
    <Row title = "Documentaries" fetchURL = {requests.fetchDocumentaries} />

    </div>
    
  );
}

export default App;

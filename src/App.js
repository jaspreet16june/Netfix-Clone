import requests from "./request";
import Row from "./row";

let App = ()=> {
  return (
    
    <div className = "App">

    <h1>This is Netflix clone Made By Jaspreet Kaur and my friend</h1>
    <Row title = "Netflix Originals" fetchURL= {requests.fetchNetflixOriginals}/>
    <Row title = "Trending" fetchURL = {requests.fetchTrending} />

    </div>
    
  );
}

export default App;

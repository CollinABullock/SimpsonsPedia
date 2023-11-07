import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "./navBar";

async function fetchSingleEpisode(id) {
  try {
    const response = await fetch(`https://api.sampleapis.com/simpsons/episodes/${id}`);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}


export default function SingleEpisode() {
  const [episode, setEpisode] = useState([]);

  const {id} = useParams();
  console.log(id);

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/episodes");
  }

 useEffect(() => {
  async function getSingleEpisode() {
    const response = await fetchSingleEpisode(id);
    console.log("response", response);
    setEpisode(response);
  }
  getSingleEpisode()
 }, [])

  return (
    <>
    <NavBar />
    <img src={episode.thumbnailUrl} className="cardImg"/>
        <h1>{episode.name}</h1>
        <h2>Season {episode.season} Episode {episode.episode}</h2>
        <p>{episode.description}</p>
        <p>Airdate: {episode.airDate}</p>
        <p>Community rating: {episode.rating}</p>
    <button onClick={goBack}>Back to episodes</button>
      
    </>
  )
}
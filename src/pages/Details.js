import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigations from '../components/Navigations';
import Footer from '../components/Footer';
import SongDetail from '../components/SongDetail';


const Details = () => {
  const [song, setSong] = useState({});
  const { songId } = useParams();

  useEffect(() => {
    // hit TMDB endpoint to get details of a movie

    fetch(`https://api-song-lyrics.herokuapp.com/lyrics/${songId}`)
    .then(response => response.json())
    .then(data => setSong(data.data));
    }, 
    
  []);

  return(
    <>
      <Navigations/>
      <Footer />
      <SongDetail song={song}/>
    </>
  );
}

export default Details;
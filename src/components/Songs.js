import React, {useState, useEffect} from "react";
import SongItem from './SongItem'


const Songs = () => {
    const [songs, setSongs] = useState([]);
    const [text,setText]= useState('');
    useEffect(() => {
        fetch('https://api-song-lyrics.herokuapp.com/hot')
        .then(response => response.json())
        .then(data =>  setSongs(data.data));

    },[]);
    
    const  handleSubmit = (e) => {
        e.preventDefault();
    
        // hit sebuah endpoint, untuk mencarri music
        fetch(`https://api-song-lyrics.herokuapp.com/search?q=${text}`)
        .then(response => response.json())
        .then(data => setSongs(data.results));
    
        setText('');
      }
    
      const handleChange = (e) => {setText(e.target.value)};

    return(
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <h2>Search Movie</h2>
            <form  onSubmit={handleSubmit}>
              <input type="text" className="form-control"  onChange={handleChange} value={text} />
            </form>
  
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center my-3">
  
            { songs.map(song => <SongItem key={song.songId} song={song} />)}
                
            </div>
        </div>
    </section>
    );
  }
export default Songs;
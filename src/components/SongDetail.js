import React from 'react';
import { Link } from 'react-router-dom';

const SongDetail = (props) => {

  return(
    <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6">
                </div>
                <div className="col-md-9">
                    <h1 className="card-text align-center mb-3"> Title : {props.song.songTitle}</h1>
                    
                    <div className="fs-5 mb-5">
                       Artist : {props.song.artist}
                    </div>
                    <div className="fs-5 mb-5">
                      <span> Lyrics : {props.song.songLyrics} </span>
                    </div>
                    <div className="d-flex">
                        <Link className="btn btn-outline-primary flex-shrink-0" to="/">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default SongDetail;

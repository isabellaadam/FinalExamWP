import React from 'react';
import { Link } from 'react-router-dom';

const SongItem= (props) => {
    

    return(
    <div className="col mb-5">
        <div className="card h-100">
            <div className="card-body p-4">
                <div className="text-center">
                    <h5 className="fw-bolder">{props.song.songTitle}</h5>
                    <div className="small mb-1">Artist : {props.song.artist}</div>
                </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                    <Link className="btn btn-outline-info mt-auto" to={`/details/${props.song.songId}`}>View Details</Link>
                </div>
            </div>
        </div>
    </div>
  );
} 

export default SongItem;

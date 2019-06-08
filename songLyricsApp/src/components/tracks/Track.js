import React from 'react';
import {Link} from 'react-router-dom';

const Track = (props) => {
  const { track } = props;
  return(

    <div className='col-md-6'>

      <div className='card mb-4 shadow-sm'  style={{minHeight:'200px'}}>
          <div className='card-body'>
            <h5  style={{minHeight:'50px'}}>{track.artist_name}</h5><hr />
            <p className='card-text'>
              <strong><i className='fas fa-play'></i>Track</strong>: {track.track_name}
            </p>
            <p className='card-text'>
              <strong><i className='fas fa-compact-disc '></i>Album</strong>: {track.album_name}
            </p>
            <Link to={`lyrics/track/${track.track_id}`} className='btn btn-primary btn-block '>
              <i className='fas fa-chevron-right'>View Lyrics</i>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default Track;

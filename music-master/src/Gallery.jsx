import React, {Component} from 'react';
import './App.css';

class Gallery extends Component{
  render(){
    return(
      <div>
        {
          this.props.tracks.map( (track, index) => {
            return(
              <div key={index} className="track">
                <img src={track.album.images[0].url} alt="track" className="track-img"/>
                <p className="track-text">{track.name}</p>
              </div>
            )
          })
        }
      </div>
    )}
}

export default Gallery;

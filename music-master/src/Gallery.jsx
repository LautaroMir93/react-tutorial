import React, {Component} from 'react';
import './App.css';

class Gallery extends Component{
  constructor(props){
    super(props);
    this.state = {
      playingURL: '',
      preview: null,
      isPlaying: false,
    }
  }

  playAudio(previewURL){
    let preview = new Audio(previewURL);
    if (!this.state.isPlaying){
      preview.play();
      this.setState({playingURL:previewURL,preview,isPlaying:true});
    } else if (this.state.playingURL === previewURL) {
      this.state.preview.pause();
      this.setState({isPlaying:false});
    } else {
      this.state.preview.pause();
      preview.play();
      this.setState({playingURL:previewURL, preview, isPlaying:true});
    }
  }

  render(){
    return(
      <div>
        {
          this.props.tracks.map( (track, index) => {
            return(
              <div key={index} className="track" onClick={ () => this.playAudio(track.preview_url)}>
                <img src={track.album.images[0].url} alt="track" className="track-img"/>
                <div className="track-play">
                  <div className="track-play-inner">
                    {
                      this.state.playingURL === track.preview_url
                      ? <span>| |</span>
                      : <span>&#9654;</span>
                    }
                  </div>
                <p className="track-text">{track.name}</p>
              </div>
              </div>
            )
          })
        }
      </div>
    )}
}

export default Gallery;

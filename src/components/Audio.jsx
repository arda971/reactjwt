import React from 'react';

import AudioStore from '../stores/AudioStore.js';
import AudioService from '../services/AudioService.js';
import Rating from '../components/Rating.jsx'


var hdate = require('human-date');

export default class Audio extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getAudioState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    if (!this.state.audio) {
      this.requestNextAudio();
    }

    AudioStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AudioStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(this.getAudioState());
  }

  requestNextAudio() {
    AudioService.nextAudio();
  }

  getAudioState() {
    return {
      audio: AudioStore.audio
    };
  }

    
  render() {
    var listAudio= Array.prototype.slice.apply(this.state.audio);
    var Cards = listAudio.map(function(value){
    
    return (        
      <li className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
      <h4>Created: {hdate.prettyPrint(value.created)}</h4>
      <h5>Duration: {Math.floor(value.duration/60)} 
      minutes</h5>
      <h5>Language: {value.language}</h5>
      <h5>Script:</h5>
      <p>{value.final_script}</p>
      <audio controls>
      <source src={value.url} type="audio/mpeg"/>
      </audio> 
      <Rating rating={value.rating} />
      </li>    

		   );
    });
      
     return ( 
      <div className="container audio center-block">
      <ul className="row">
      {Cards}
      </ul>
      </div> 

    );
  }
}

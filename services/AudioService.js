import request from 'reqwest';
import when from 'when';
import Param from '../constants/AudioConstants';
import Auth from '../services/AuthService';

class AudioService {
          constructor() {

    
    this._audio = null;


  }

  nextAudio() {
      console.log("audio",Param);
    request({
      url: Param.AUDIO_URL,
      method: 'GET',
      headers: {
        'Authorization': "JWT "+Auth.get_jwt()
      }
    })
    .then(function(response) {
        this._audio=response.results;
        console.log("res audio",response);
    });
  }
    
get_audio() {
    return this._audio;
  }


}

export default new AudioService()

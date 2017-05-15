import request from 'reqwest';
import when from 'when';
import Param from '../constants/AudioConstants';
import Auth from '../services/AuthService';
import AudioActions from '../actions/AudioActions';


class AudioService {

 

  nextAudio() {
  console.log("param", Param.AUDIO_URL+" jwt="+Auth.get_jwt());
  
    request({
      url: Param.AUDIO_URL,
      method: 'GET',
      headers: {
        'Authorization': "JWT "+Auth.get_jwt()
      }
    })
    .then(function(response) {
             AudioActions.gotAudio(response.results);
        console.log(response);
       
         
      
    });
  }
    
get_audio(audio) {
    //return this.state.audio;
    console.log("reqa",audio);
  }


}

export default new AudioService()

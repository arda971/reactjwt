import AppDispatcher from '../dispatchers/AppDispatcher.js';
import {AUDIO_GET} from '../constants/AudioConstants.js';

export default {
  gotAudio: (audio) => {
    AppDispatcher.dispatch({
      actionType: AUDIO_GET,
      audio: audio
    })
  }
}

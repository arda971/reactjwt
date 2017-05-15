import {AUDIO_GET} from '../constants/AudioConstants';
import BaseStore from './BaseStore';

class AudioStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this))
    this._audio = '';
  }

  _registerToActions(action) {
              this._audio = action.audio;
        this.emitChange();
      
    /*switch(action.actionType) {
      case AUDIO_GET:
        this._audio = action.audio;
        this.emitChange();
        break;
      case LOGOUT_USER:
        this._audio = null;
        this.emitChange();
        break;
      default:
        break;
    };*/
  }

  get audio() {
    return this._audio;
  }
}

export default new AudioStore();

import AppDispatcher from '../dispatchers/AppDispatcher.js';
import {LOGIN_USER, LOGOUT_USER} from '../constants/LoginConstants.js';
import RouterContainer from '../services/RouterContainer';


export default {
  loginUser: (jwt) => {
    var savedJwt = localStorage.getItem('jwt');
          
      AppDispatcher.dispatch({
      actionType: LOGIN_USER,
      jwt: jwt
    }); 
          

    if (savedJwt !== jwt) {

      localStorage.setItem('jwt', jwt);
       
        console.log("store");
    }
  },
  logoutUser: () => {
    
    localStorage.removeItem('jwt');
    AppDispatcher.dispatch({
      actionType: LOGOUT_USER
    });
  }
}

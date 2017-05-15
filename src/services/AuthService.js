import request from 'reqwest';
import when from 'when';
import Param from '../constants/LoginConstants';
import jwt_decode from 'jwt-decode';
import LoginActions from '../actions/LoginActions';

class AuthService {

      constructor() {   
   
    this.state = this._getState();
  }
    
_getState() {
      return {
       
        user: this.setUser(),
        jwt: this.setJwt()
      };
    }
   
login(email, password) {

    return this.handleAuth(when(request({
      url: Param.LOGIN_URL,
      method: 'POST',
      type: 'json',
      data: {
        email, password
      }
    })));
}

  logout() {
    LoginActions.logoutUser();
  }
    
setUser() {
  
       if(localStorage.getItem('jwt')){
      return jwt_decode(localStorage.getItem('jwt'));  
    }else{
        return "";
    }
}

setJwt() {
        if(localStorage.getItem('jwt')){
      return localStorage.getItem('jwt');  
    }else{
        return "";
    }
}

  get_user() {
  
    return this.state.user;
}

get_jwt() {
    return this.state.jwt;
}


    
loginUser(jwt){
    var savedJwt = localStorage.getItem('jwt');

    if (savedJwt !== jwt) {
      localStorage.setItem('jwt', jwt);      
    }
}

handleAuth(loginPromise) {
    return loginPromise
      .then(function(response) {
        var jwt = response.token;
        LoginActions.loginUser(jwt);
         console.log("log",jwt);
       // return true;
      })    
        
  }
}

export default new AuthService()

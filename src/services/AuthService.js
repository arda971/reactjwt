import request from 'reqwest';
import when from 'when';
import Param from '../constants/LoginConstants';
import jwt_decode from 'jwt-decode';

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

    localStorage.removeItem('jwt');
    return true;

}
    
setUser() {
  
    return jwt_decode(localStorage.getItem('jwt'));
}

setJwt() {
    return localStorage.getItem('jwt');
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
         localStorage.setItem('jwt', jwt);

        return true;
      })    
        
  }
}

export default new AuthService()

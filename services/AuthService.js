import request from 'reqwest';
import when from 'when';
import Param from '../constants/LoginConstants';
import jwt_decode from 'jwt-decode';

class AuthService {

      constructor() {

    
    this._user = null;
    this._jwt  = null;
    var tmpJwt=localStorage.getItem('jwt');
  
    if(tmpJwt){
    this._user = jwt_decode(tmpJwt);
    this._jwt  = tmpJwt; 
    }

  }
   
  login(email, password) {
      console.log("in log");
      console.log(Param.LOGIN_URL);
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

get_user() {
    return this._user.username;
  }

  get_jwt() {
    return this._jwt;
  }

  isLoggedIn() {
    return !!this._user;
  }
    
  loginUser(jwt){
    var savedJwt = localStorage.getItem('jwt');

    if (savedJwt !== jwt) {


      localStorage.setItem('jwt', jwt);
         console.log("store");
    
     

      
    }
  }

  handleAuth(loginPromise) {
    return loginPromise
      .then(function(response) {
        var jwt = response.token;
         localStorage.setItem('jwt', jwt);
       // this._user = jwt_decode(jwt);
       //this.loginUser(jwt);
  console.log(jwt);
        return true;
      })    
        
  }
}

export default new AuthService()

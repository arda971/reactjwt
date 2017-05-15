
import React from 'react';
import Auth from '../services/AuthService';

export default class Login extends React.Component {    
    
	goToApp = event => {
		event.preventDefault();
		

         
       
    Auth.login(this.boxUser.value, this.boxPass.value)
          
      .catch(function(err) {
        alert("There's an error logging in");
        console.log("Error logging in", err);
         
      });
        
  
       const { router }=this.context
      if(localStorage.getItem('jwt')){
        router.transitionTo(`/home`);   
      }    
       
   
         
     
		 
	}
    



  render() {
    return (
      <div className="login jumbotron center-block">
        <h1>Login</h1>
        <form  onSubmit={(e) => this.goToApp(e)} >
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text"  className="form-control" id="username" placeholder="Username" ref={(input) => {this.boxUser = input}} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password" ref={(input) => {this.boxPass = input}}/>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    </div>
    );
  }


}

Login.contextTypes ={
        router: React.PropTypes.object
    }

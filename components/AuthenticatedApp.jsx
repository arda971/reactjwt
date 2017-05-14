import React from 'react';
import Home from '../components/Home';
import Audio from '../components/Audio';
import AuthService from '../services/AuthService';
import logo from '../logo.svg';

export default class AuthenticatedApp extends React.Component {
  constructor() {
    super()
 this.state = this._getLoginState();
      

  }

    _getLoginState() {
      return {
        userLoggedIn: AuthService.isLoggedIn(),
        user: AuthService.get_user(),
        jwt: AuthService.get_jwt()
      };
    }

  componentDidMount() {
    this.changeListener = this._onChange.bind(this);
   
  }

  _onChange() {
    this.setState(this._getLoginState());
  }

  componentWillUnmount() {
   
  }
    
    


    
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-inverse">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">I2xAi </a>
    
          </div>
           <ul className="nav navbar-nav navbar-right">

        <li>
          <a href="" onClick={this.logout}>Logout</a>
        </li>
      </ul>
        </nav>
        <Home user={this.state.user} />
       <h1>Hello {this.state.user}</h1> 
        <Audio />    
      </div>
   
    );
  }

  logout(e) {
    e.preventDefault();
      console.log("logou");
    localStorage.removeItem('jwt');
      
   
//this.context.router.transitionTo(`/`);  
    
           
  }


    static contextTypes ={
        router: React.PropTypes.Object
    }
}

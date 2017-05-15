import React from 'react';
import Audio from '../components/Audio';
import AuthService from '../services/AuthService';



export default class AuthenticatedApp extends React.Component {
  constructor() {
    super()
 this.state = this._getLoginState();
    

  }

    _getLoginState() {
      return {

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
    
   	goToLogin = event => {
		event.preventDefault();
		AuthService.logout();
		
		// On change d'url
		this.context.router.transitionTo(`/`);
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
          <a href="" onClick={(e) => this.goToLogin(e)}>Logout</a>
        </li>
      </ul>
        </nav>

       <h3>Hello {this.state.user.username}</h3> 
        <Audio />    
      </div>
   
    );
  }



	static contextTypes = {
		router: React.PropTypes.object
	};

}

import React, {Component} from 'react';
import Login from '../components/Login';
import AuthenticatedApp from '../components/AuthenticatedApp';
import { BrowserRouter as Router, Route} from 'react-router-dom';



const Nav = () => {
	return (
      
        <Router>
			<div>
       <Route exact path="/" component={Login} />
       <Route path="/home" component={AuthenticatedApp} />
      
          </div>
		</Router>
             
	)
}

export default Nav;
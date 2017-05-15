import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login';
import NotFound from './components/NotFound';
import AuthenticatedApp from './components/AuthenticatedApp';
import { BrowserRouter, Match, Miss } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


/*export const Root = () => {
	return (
        <BrowserRouter>
			<div>
       <Match exactly pattern="/" component={Login} />
       <Match pattern="/home" component={AuthenticatedApp} />
       <Miss component={NotFound} />
           </div>
		</BrowserRouter>
	)
}*/



ReactDOM.render(
  <Login />,
  document.getElementById('root')
);

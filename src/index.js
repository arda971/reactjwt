// React
import React from 'react';
import { render } from 'react-dom';
// Components
import NotFound from './components/NotFound';
import Login from './components/Login';
import AuthenticatedApp from './components/AuthenticatedApp';
// Rooter
import { BrowserRouter, Match, Miss } from 'react-router';
// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';



const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={Login} />
				<Match pattern="/audio" component={AuthenticatedApp} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}

render(
  <Root />,
  document.getElementById('root')
);

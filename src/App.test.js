import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login';
import Audio from './components/Audio';
import NotFound from './components/NotFound';
import AuthenticatedApp from './components/AuthenticatedApp';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('Login renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
});

it('AuthenticateApp renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AuthenticatedApp />, div);
});

it('Audio renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Audio />, div);
});

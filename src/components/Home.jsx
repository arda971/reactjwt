import React from 'react';


export default class Home extends React.Component {
  render() {
    return (<h1>Hello {this.props.user ? this.props.user : ''}</h1>);
  }
}

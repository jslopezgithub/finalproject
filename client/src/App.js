import React, { Component } from 'react';

import { getMessage } from './service';
<<<<<<< HEAD
// import logo from './logo.svg';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { message: 'Loading...' };
  }
=======
import logo from './logo.svg';
import './App.css';

export class App extends Component {
  state = { message: 'Loading...' };
>>>>>>> 56460ff1e356afcd24588b010556d4bb55a429a8

  componentDidMount() {
    getMessage().then(message => this.setState({ message }));
  }

<<<<<<< HEAD
  // eslint-disable-next-line class-methods-use-this
  render() {
    // const { message } = this.state;
    return (
      <div>
        {/* <img
=======
  render() {
    const { message } = this.state;
    return (
      <div>
        <img
>>>>>>> 56460ff1e356afcd24588b010556d4bb55a429a8
          className="logo"
          data-qa="logo"
          src={logo}
          alt="Just the React logo"
<<<<<<< HEAD
        /> */}
        {/* <p className="message" data-qa="message">
          {message}
        </p> */}
        <h1>Cnca Project</h1>
=======
        />
        <p className="message" data-qa="message">
          {message}
        </p>
        <h>Cnca Project</h>
>>>>>>> 56460ff1e356afcd24588b010556d4bb55a429a8
      </div>
    );
  }
}
export default App;

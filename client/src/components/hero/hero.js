import React, { Component } from 'react'
import logo from './logo.svg';
import './hero.css'

class Hero extends Component {
  render() {
    return(
      <div>
        <div className="hero">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1>Welcome to Paysplit</h1>
          <p>An easy way to split the bill between friends</p>
          <div className="call-to-action-btn">
            { /*change this redirect link when you have the launched address */}
            <button><a href='/'>Try Paysplit</a></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero;

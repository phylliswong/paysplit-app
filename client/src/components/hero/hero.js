import React, { Component } from 'react'
import logo from './logo.svg';
import './hero.css'

class Hero extends Component {
  render() {
    return(
      <div>
        <hero className="hero">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1>Welcome to Paysplit</h1>
          <p>An easy way to split the bill between friends</p>
          <div className="call-to-action-btn">
            <button href="#">Try Paysplit</button>
          </div>
        </hero>
      </div>
    )
  }
}

export default Hero;
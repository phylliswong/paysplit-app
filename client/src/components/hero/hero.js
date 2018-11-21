import React, { Component } from 'react'
import './hero.css'

class Hero extends Component {
  render() {
    return(
      <div>
        <span className="hero">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1>Welcome to Paysplit</h1>
          <p>An easy way to split the bill between friends</p>
          <div className="call-to-action-btn">
            { /*change this redirect link when you have the launched address */}
          </div>
	        <button className={'hero-btn'}><a href='/'>Try Paysplit</a></button>
        </span>
      </div>
    )
  }
}

export default Hero;
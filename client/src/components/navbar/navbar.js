import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './nav.css';

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mobileMenu: {
        active: false,
        className: '',
        width: '0%',
        padding: '0rem'
      }
    }

    this.onHandleClick = this.onHandleClick.bind(this);
  }

  onHandleClick() {
    if (this.state.mobileMenu.active) {
    return  this.setState({mobileMenu: {active: false, className: '', width: '0%', padding: '0%'}})

    }
    return this.setState({mobileMenu: {active: true, className: 'active', width: '75%', padding: '1.5rem'}})

  }

  render() {
    return (
      <div className="fixed">
        <nav className="desktop-nav">
          <li><Link to="/">PaySplit</Link></li>
          <div className="right-nav">
            <li><Link to="/">Product</Link></li>
            <li><Link to="/">Contact Us</Link></li>
            <li><Link to="/team">Team</Link></li>
          </div>
        </nav>

        <button onClick={this.onHandleClick} className={'mobile-nav-btn ' + this.state.mobileMenu.className}>☰</button>
        <nav className={'mobile-nav ' + this.state.mobileMenu.className} style={{width: this.state.mobileMenu.width, padding: this.state.mobileMenu.padding}}>
          <li><Link onClick={this.onHandleClick} className="mob-menu-logo" to="/">PaySplit</Link></li>
          <li><Link onClick={this.onHandleClick} to="/">Product</Link></li>
          <li><Link onClick={this.onHandleClick} to="/">Contact Us</Link></li>
          <li><Link onClick={this.onHandleClick} to="/team">Team</Link></li>
        </nav>
      </div>
);


  }
}

export default Navbar;

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
        width: '0%'
      }
    }

    this.onHandleClick = this.onHandleClick.bind(this);
  }

  onHandleClick() {
    if (this.state.mobileMenu.active) {
      console.log('wow')
    return  this.setState({mobileMenu: {active: false, className: '', width: '0%'}})

    }
    console.log('huh')
    return this.setState({mobileMenu: {active: true, className: 'active', width: '100%'}})

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
        <nav className={'mobile-nav ' + this.state.mobileMenu.className} style={{width: this.state.mobileMenu.width}}>
          <li><Link onClick={this.onHandleClick} className="mob-menu-logo" to="/">PaySplit</Link></li>
          <li><Link onClick={this.onHandleClick} to="/">Product</Link></li>
          <li><Link onClick={this.onHandleClick} to="/">Contact Us</Link></li>
          <li><Link onClick={this.onHandleClick} to="/team">Team</Link></li>
        </nav>
      </div>
<<<<<<< HEAD
      <div className="navbar-logo"><Link to="/">PAYSPLIT</Link></div>
      <div className="spacer"/>
      <div className="navbar-navigation-items">
        <ul>
          <li><a href="#info">Product</a></li>
          <li><a href="#footer">Contact us</a></li>
          <Link to="/team">Team</Link>
        </ul>
      </div> {/* END toolbar-navigation-items */}
    </nav>
  </header>
);

export default navbar;
=======
    )
  }
}

export default Navbar;
>>>>>>> e4567c50cb684bcba2ed839d80d55e1019786d98

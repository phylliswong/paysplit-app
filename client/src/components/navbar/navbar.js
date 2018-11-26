import React from 'react';
import DrawerToggleBtn from './drawerToggleBtn';
import { Link } from 'react-router-dom';

import './navbar.css';

const navbar = props => (
  <header className="navbar">
    <nav className="navbar-navigation">
      <div className="navbar-toggle-btn">
        <DrawerToggleBtn click={props.drawerClickHandler} />
      </div>
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

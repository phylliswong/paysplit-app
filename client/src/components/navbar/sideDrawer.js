import React from 'react';
import './sideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li><a href="/">Product</a></li>
        <li><a href="/">Team</a></li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
import React from 'react';

import './drawerToggleBtn.css';

const drawerToggleButton = props => (
  <button className="toggle-btn" onClick={props.click}>☰</button>
);

export default drawerToggleButton;
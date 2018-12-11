import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

class Thanks extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="new-email">
        <div className="email-form-con">
        <div className="top-form">Thank You</div>
        <p>You have been subscribed to our mailing list</p>
        <center><Link to="/">Back To Home</Link></center>
        </div>
      </div>
    )
  }
}


export default Thanks;

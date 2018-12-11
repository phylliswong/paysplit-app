import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

class Contact extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="new-email">
        <div className="email-form-con">
        <div className="top-form">Contact Us</div>

          <form action="/api/emails/new" method="POST">
            <input className="field" placeholder="Your@email.com" name="email"/>
            <input className="field" placeholder="Email Subject" name="subject"/>
            <textarea className="field" placeholder="Email Body" name="body"/>
            <input className="submit-btn" type="submit"/>
          </form>
        </div>
      </div>
    )
  }
}


export default Contact;

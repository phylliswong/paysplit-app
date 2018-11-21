import React, { Component } from 'react'

import './footer.css'


class Footer extends Component {
  render() {
    return(
      <div className={'footer-container'}>
        <div className={'titles-container'}>
          <div className="footer-sections col-md-12 col-lg-4 sm-m-15px-tb md-m-30px-b">
            <h4>About Us</h4>
            <p>Some crap about who we are and what we do.</p>
          </div>
          <div className="footer-sections col-md-12 col-lg-4 sm-m-15px-tb md-m-30px-b">
            <h4>Contact Us</h4>
            <p>some more crap to say here</p>
          </div>
          <div className="footer-sections col-md-12 col-lg-4 sm-m-15px-tb md-m-30px-b">
            <h4>Subscribe</h4>
            <p>And again, more crap here</p>
          </div>

        </div>
        <hr/>
        <p className={'footer-text'}>Copyright © 2018 PaySplit Inc. All rights reserved.</p>
      </div>
    )
  }
}

export default Footer;
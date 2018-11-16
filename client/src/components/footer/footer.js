import React, { Component } from 'react'

import './footer.css'


class Footer extends Component {
  render() {
    return(
      <div className={'footer-container'}>
        <p className={'footer-text'}>Copyright © 2018 PaySplit Inc. All rights reserved.</p>
      </div>
    )
  }
}

export default Footer;
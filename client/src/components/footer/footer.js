import React, { Component } from 'react'
import './footer.css'
import { Link } from 'react-router-dom'


class Footer extends Component {
  render() {
    return(
      <div className={'footer-container'}>
        <p className="white" align="center">This Is Copyrighted</p>
      </div>
    )
  }
}

export default Footer;

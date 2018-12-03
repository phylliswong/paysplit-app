import React, { Component } from 'react';
import './mission.css'

class Mission extends Component {
  render() {
    return(
      <div className='mission-container'>
        <div className='mission-content'>
          <span className={'mission-title'}>Request payment from friends directly from your receipt</span>
          <p className={'mission-p'}>
            PaySplit is an optimized payment gateway on a mobile device
            that allows you to take a picture of a receipt, and generates a
            digital version using optical character recognition. The app
            displays all the items with their amounts. This allows you to select
            any item to request payment from your contacts, and pay the bill.
          </p>
        </div>
      </div>
    )
  }
}

export default Mission;
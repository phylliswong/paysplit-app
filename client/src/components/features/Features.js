import React, { Component } from 'react';
import {
    TweenLite as Tween,
    TimelineMax as Timeline,
    TweenLite,
    Ease,
    Back,
    Elastic,
    Bounce
  } from 'gsap';

import ScrollMagic from "./plugin.js"; // my own wrapper for scrollmagic that includes greensock
import './features.css';

class Features extends Component {

  componentDidMount() {
    var controller = new ScrollMagic.Controller();
    var tween = new Timeline().staggerTo('.feature-card', 1, {
      x: -0,
      y: 0,
      scale: .6,
      opacity: .6,
      ease: Back.easeIn }, .20).staggerTo('.feature-card', 1, {
        x: -1200,
        ease: Back.easeIn
      }, .6)

    var scene = new ScrollMagic.Scene({
      triggerElement: ".feature-section",
      offset: 1100,
      duration: 500 }).setTween(tween).addTo(controller);
  }

  render() {
    return (
      <section className="features">
        <div className="features-content">
          <h3 className="feature-headline">Don't fret, <span class="blue">split</span> the check.</h3>
        </div>
        <div className="feature-cards">
          <div className="feature-card">
            <img className="feature-icon" src="https://img.icons8.com/ios/1600/screenshot.png" />
            <p>Step 1</p>
            <p>Take a photo of your check or bill.</p>
          </div>
          <div className="feature-card">
            <img className="feature-icon" src="https://img.icons8.com/ios/100/000000/checklist.png" />
            <p>Step 2</p>
            <p>Choose who each item belongs to.</p>
          </div>
          <div className="feature-card">
            <img className="feature-icon" src="https://img.icons8.com/ios/100/000000/upload-to-cloud.png" />
            <p>Step 3</p>
            <p>Send unique URL for payment through the cloud.</p>
          </div>
          <div className="feature-card">
            <img className="feature-icon" src="https://img.icons8.com/ios/100/000000/cash-in-hand.png" />
            <p>Step 4</p>
            <p>Recieve your funds.</p>

          </div>
        </div>
      </section>
    )
  }
}

export default Features

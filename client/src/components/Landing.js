import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
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


// COMPONENTS
import Hero from "./hero/hero";
import Features from './features/Features';
import Mission from "./mission/mission";
import Info from './info/info';
import TeamCard from './team/team';
import Footer from './footer/footer';

// import "./App.css";

class Landing extends Component {
  state = {
    response: "",
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));




      var controller = new ScrollMagic.Controller();
      var tween = new Timeline().add("new", 0).to('.desktop-nav', .2, {
        backgroundColor: '#007AFF',
        boxShadow: '1px 0px 2px 1px rgba(0,0,0,.3)',
        ease: Ease.easeNone }, "new").to('.nav-link', .1, {
          color: 'white'
        }, "new")

      var scene = new ScrollMagic.Scene({
        triggerElement: "h1",
        offset: 200,
        duration: -1 }).setTween(tween).addTo(controller);

    }



  callApi = async () => {
    // Renders what is at the route /api/hello
    const response = await fetch("/api/hello");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App react-transition fade-in">
        <Hero />
        <div className={'mission-component'}>
          <Mission/>
        </div>
        <Features />

        <div className={'info-component'}>
          <Info />
        </div>
      </div>
    );
  }
}

export default Landing;

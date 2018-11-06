import React, { Component } from "react";


// COMPONENTS
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import SideDrawer from "./components/navbar/sideDrawer";
import Backdrop from "./components/navbar/backdrop";
import Mission from "./components/mission/mission";
import Info from './components/info/info';
import TeamCard from './components/team/team';
import Footer from './components/footer/footer';

import "./App.css";

class App extends Component {
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
  }

  callApi = async () => {
    // Renders what is at the route /api/hello
    const response = await fetch("/api/hello");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="App">
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        <Hero />
        <div className={'mission-component'}>
          <Mission/>
        </div>
        <div className={'info-component'}>
          <Info />
        </div>
        <div className={'team-component'}>
          <TeamCard />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

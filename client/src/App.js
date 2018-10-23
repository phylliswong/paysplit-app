import React, { Component } from 'react';

// COMPONENTS
import Hero from './components/hero/hero'
import Navbar from './components/navbar/navbar'
import SideDrawer from './components/navbar/sideDrawer'
import Backdrop from './components/navbar/backdrop'

import './App.css';

class App extends Component {
  state = {
    response: '',
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState( (prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  };


  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    // Renders what is at the route /api/hello
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div className="App">
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        <Hero />
        <p className='App-intro'>{this.state.response}</p>
      </div>
    );
  }
}

export default App;

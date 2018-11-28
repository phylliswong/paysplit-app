import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';


// COMPONENTS

import Landing from './components/Landing';
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import SideDrawer from "./components/navbar/sideDrawer";
import Backdrop from "./components/navbar/backdrop";
import Mission from "./components/mission/mission";
import Info from './components/info/info';
import TeamCard from './components/team/team';
import Footer from './components/footer/footer';

import "./react-transitions.css";
import "./App.css";


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="transition-container">
            <Navbar drawerClickHandler={this.drawerToggleClickHandler} />

            <Route exact path="/" component={Landing} />
            <Route exact path="/team" component={TeamCard} />

            <Footer />
          </div>
        </BrowserRouter>
    );
  }
}


export default App;

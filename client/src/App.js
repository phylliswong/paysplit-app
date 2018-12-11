import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';

// COMPONENTS
import Landing from './components/Landing';
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Mission from "./components/mission/mission";
import Info from './components/info/info';
import TeamCard from './components/team/team';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';

import "./react-transitions.css";
import "./App.css";


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Navbar />
            <div className="transition-container">
              <Route exact path="/" component={Landing} />
              <Route exact path="/team" component={TeamCard} />
              <Route exact path="/contact" component={Contact} />
              <Footer />
            </div>
          </div>
        </BrowserRouter>
    );
  }
}


export default App;

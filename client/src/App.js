import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';

// COMPONENTS
import Landing from './components/Landing';
<<<<<<< HEAD
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/Navbar";
import Mission from "./components/mission/mission";
import Info from './components/info/info';
=======
import Navbar from "./components/navbar/navbar";
>>>>>>> def6b9833e8518d4a6ddd03454708a1b84ca3a01
import TeamCard from './components/team/team';
import Footer from './components/footer/footer';

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
              <Footer />
            </div>
          </div>
        </BrowserRouter>
    );
  }
}


export default App;

import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.scss';
import Routes from './router';

import Navigation from './components/Navbar';
import HeroSec from './components/HeroSec';
import SecOne from './components/SecOne';
import SecSteps from './components/SecSteps';
import SecTwo from './components/SecTwo';
import SecHowStake from './components/SecHowStake';
import SecThree from './components/SecThree';
import SecPricing from './components/SecPricing';
import Footer from './components/Footer';
// import RouterExample from './router';
import Home from './pages/Home';
import Developer from './pages/Developer';
import Faq from './pages/Faq';
import { BrowserRouter, HashRouter } from 'react-router-dom';

function App() {
  return (<HashRouter>
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        {/* <HeroSec />
        <SecOne />
        <SecSteps />
        <SecTwo />
        <SecHowStake />
        <SecThree />
        <SecPricing /> */}
        <Routes />

        {/* <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/developers">
            <Developer />
          </Route>
          <Route exact path="/faq">
            <Faq />
          </Route>
        </Switch> */}
      </main>
      <Footer />
    </div>
  </HashRouter>);
}

export default App;

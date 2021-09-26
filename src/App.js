import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.scss';

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
function App() {
  return (<Router>
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
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/developers">
            <Developer />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  </Router>);
}

export default App;

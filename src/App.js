import React from 'react';
import './App.scss';
import Routes from './router';

import Navigation from './components/Navbar';
import Footer from './components/Footer';
// import RouterExample from './router';
import { BrowserRouter, HashRouter } from 'react-router-dom';

function App() {
  return (<HashRouter>
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        <Routes />
      </main>
      <Footer />
    </div>
  </HashRouter>);
}

export default App;

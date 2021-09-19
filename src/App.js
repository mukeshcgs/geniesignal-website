import logo from './logo.svg';
import './App.scss';
import Navigation from './components/Navbar';
import HeroSec from './components/HeroSec';
import SecOne from './components/SecOne';
import SecSteps from './components/SecSteps';
import SecTwo from './components/SecTwo';
import SecHowStake from './components/SecHowStake';

function App() {
  return (
    <div className="App">
      <Navigation />
      <header>
        <HeroSec />
        <SecOne />
        <SecSteps />
        <SecTwo />
        <SecHowStake />
      </header>
    </div>
  );
}

export default App;

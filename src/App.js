import logo from './logo.svg';
import './App.scss';
import Navigation from './components/Navbar';
import HeroSec from './components/HeroSec';

function App() {
  return (
    <div className="App">
      <Navigation />
      <header>
        <HeroSec />
      </header>
    </div>
  );
}

export default App;

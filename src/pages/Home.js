import '../App.scss';

import Navigation from '../components/Navbar';
import HeroSec from '../components/HeroSec';
import SecOne from '../components/SecOne';
import SecSteps from '../components/SecSteps';
import SecTwo from '../components/SecTwo';
import SecHowStake from '../components/SecHowStake';
import SecThree from '../components/SecThree';
import SecPricing from '../components/SecPricing';
import Footer from '../components/Footer';

function Home() {
    return (
        <div className="App">
            <HeroSec />
            <SecOne />
            <SecSteps />
            <SecTwo />
            <SecHowStake />
            <SecThree />
            <SecPricing />
        </div>
    );
}

export default Home;

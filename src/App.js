import React, {Component} from 'react';
import './index.css'
import Navbar from './components/navbar';
import Header from './components/header';
import Home from './components/home'
import Agency from './components/agency'
import ButtonOpenPortfolio from './components/ButtonOpenPortfolio';
import PermanentArtists from './components/permanentArtists';
import Footer from './components/Footer';
import GuestHome from './components/GuestHome'
import YourProject from './components/yourproject';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PortfolioSection from './components/PortfolioSection';


class App extends Component {
  constructor(props){
    super(props);
    this.state={};
  }

  render(){
    return (
      <div className="App">
        {/* <Navbar /> */}
        {/* <Header />
        <Home />
        <div id="agency">
          <Agency />
        </div>
        <ButtonOpenPortfolio />
        <div id="permanentartists">
          <PermanentArtists/> 
        </div>
        <div id="guests">
          <GuestHome/>
        </div>
        <div id="yourproject">
          <YourProject />
        </div>
        <div id="footer">
          <Footer />
        </div> */}
        <div id="">
          <PortfolioSection />
        </div>
      </div>
    );
  }

}

export default App;
import React, {Component} from 'react';
import './index.css'
import Navbar from './components/navbar';
import Header from './components/header';
import Home from './components/home'
import Agency from './components/agency'
import ButtonOpenPortfolio from './components/ButtonOpenPortfolio';
import Footer from './components/Footer';
import GuestHome from './components/GuestHome'
import YourProject from './components/yourproject';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class App extends Component {
  constructor(props){
    super(props);
    this.state={};
  }

  render(){
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Home />
        <Agency />
        <ButtonOpenPortfolio />
        <GuestHome/>
        <YourProject />
        <Footer />
      </div>
    );
  }

}

export default App;

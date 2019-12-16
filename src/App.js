import React, {Component} from 'react';
import './index.css'
import Navbar from './components/navbar';
import Header from './components/header';
import Home from './components/home'
import Agency from './components/agency'
import ButtonOpenPortfolio from './components/ButtonOpenPortfolio';
<<<<<<< HEAD
import PermanentArtists from './components/permanentArtists';
import PermanentsArtists1 from './components/permanentsArtists1';
=======
import GuestHome from './components/GuestHome'
import YourProject from './components/yourproject';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
>>>>>>> dev


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
<<<<<<< HEAD
        <PermanentArtists/> 
        <PermanentsArtists1/>

=======
        <GuestHome/>
        <YourProject />
>>>>>>> dev
      </div>
    );
  }

}

export default App;

import React, {Component} from 'react';
import './index.css'

import Navbar from './components/navbar';
import Header from './components/header';
import Home from './components/home'
import Agency from './components/agency'
import ButtonOpenPortfolio from './components/ButtonOpenPortfolio';
import GuestHome from './components/GuestHome'
import YourProject from './components/yourproject';


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
      </div>
    );
  }

}

export default App;

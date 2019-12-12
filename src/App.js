import React, {Component} from 'react';
import NavbarTest from './components/navbar';
import Header from './components/header';
import Home from './components/home'
import Agency from './components/agency'
import ButtonOpenPortfolio from './components/ButtonOpenPortfolio';
import GuestHome from './components/GuestHome'
import './style_trame.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state={};
  }

  render(){
    return (
      <div className="App">
        <NavbarTest />
        <Header />
        <Home />
        <Agency />
        <ButtonOpenPortfolio />
        <GuestHome/>
      </div>
    );
  }

}

export default App;

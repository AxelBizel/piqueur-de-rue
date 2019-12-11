import React, {Component} from 'react';
import NavbarTest from './components/navbar';
import Header from './components/header';
import Home from './components/home'
import Agency from './components/agency'
import ButtonOpenPortfolio from './components/ButtonOpenPortfolio';
import PermanentArtists from './components/permanentArtists';
import PermanentsArtists1 from './components/permanentsArtists1';


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
        <PermanentArtists/>
        <PermanentsArtists1/>
        <ButtonOpenPortfolio />
      </div>
    );
  }

}

export default App;

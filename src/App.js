import React, {Component} from 'react';
import NavbarTest from './components/navbar';
import Header from './components/header';
import Agency from './components/agency'
import ButtonOpenPortfolio from './components/ButtonOpenPortfolio';

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
        <Agency />
        <ButtonOpenPortfolio />
      </div>
    );
  }

}

export default App;

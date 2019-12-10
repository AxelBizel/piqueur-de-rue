import React, {Component} from 'react';
import ButtonOpenPortfolio from './components/ButtonOpenPortfolio';
import NavbarTest from './components/navbar';
import Header from './components/header';


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
        <ButtonOpenPortfolio />
      </div>
    );
  }

}

export default App;

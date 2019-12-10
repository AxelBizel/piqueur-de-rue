import React, {Component} from 'react';
import ModalPortfolios from './components/ModalPortfolios';
import ButtonOpenPortfolio from './components/ButtonOpenPortfolio';

class App extends Component {
  constructor(props){
    super(props);
    this.state={};
  }

  render(){
    return (
      <div className="App">
        <ButtonOpenPortfolio />
      </div>
    );
  }
}

export default App;

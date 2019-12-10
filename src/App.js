import React, {Component} from 'react';
import ModalPortfolios from './components/ModalPortfolios';

class App extends Component {
  constructor(props){
    super(props);
    this.state={};
  }

  render(){
    return (
      <div className="App">
        <ModalPortfolios />
      </div>
    );
  }
}

export default App;

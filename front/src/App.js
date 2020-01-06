import React, { Component } from "react";
import "./index.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Home from "./components/home";
import Agency from "./components/agency";
import ButtonOpenPortfolio from "./components/ButtonOpenPortfolio";
import PermanentArtists from "./components/permanentArtists";
import Footer from "./components/Footer";
import GuestHome from "./components/GuestHome";
import YourProject from "./components/yourproject";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PortfolioSection from "./components/PortfolioSection";
import {connect} from 'react-redux';
import {addName} from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myName:"",
    };
  }


  handleChangeTest = (e) => {
    let {myName} = this.state;
    myName = e.target.value;
    this.setState({myName})
  }

  onClickTest = (e) => {
    this.props.addName(this.state.myName);
  }


  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Home />
        {/* test pour redux */}
        <input name="myName" type="text" onChange={this.handleChangeTest} placeholder="test redux entrez un nom" ></input>
        <button  onClick={this.onClickTest}>Ajouter</button>
        {/* redux */}
        <div id="agency">
          <Agency />
        </div>
        <ButtonOpenPortfolio />
        <div id="permanentartists">
          <PermanentArtists />
        </div>
        <div id="guests">
          <GuestHome />
        </div>
        <div id="yourproject">
          <YourProject />
        </div>
        <div id="footer">
          <Footer />
        </div>
        <div>
          <PortfolioSection />
        </div>
      </div>
    );
  }
}

const mstp = state => {
  console.log('Voici mon GS :',state);
  return { names : state.names};
}

const mdtp = dispatch => ({
  addName : myName => dispatch(addName(myName)),
})

export default connect(mstp, mdtp)(App);


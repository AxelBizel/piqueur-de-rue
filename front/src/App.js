import React, { Component } from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Home from "./components/home";
import Agency from "./components/agency";
import Footer from "./components/Footer";
import GuestHome from "./components/GuestHome";
import PortfolioSection from "./components/PortfolioSection";
import YourProjectAccordion from "./components/YourProjectAccordion";
import "./index.css";
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Home />
        <div id="agency">
          <Agency />
        </div>
        <div>
          <PortfolioSection />
        </div>
        <div id="guests">
          <GuestHome />
        </div>
        <div id="yourproject">
          <YourProjectAccordion />
        </div>
        <div id="footer">
          <Footer />
        </div>
      
      </div>
    );
  }
}




export default App;


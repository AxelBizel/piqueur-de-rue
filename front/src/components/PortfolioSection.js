import React, { Component } from "react";
import axios from "axios";
import ButtonOpenPortfolio from "./ButtonOpenPortfolio";

class PortfolioSection extends Component {
  state = {
    portfolios: null
  };

  componentDidMount() {
    axios.get(`http://localhost:5000/api/portfolio`).then(res => {
      const portfoliosData = res.data;
      this.setState({ portfolios: portfoliosData });
      console.log(this.state);
    });
  }

  render() {
    return (
      <div>
        {this.state.portfolios === null ? (
          <p>loading</p>
        ) : (
          this.state.portfolios.map(portfolio => (
            <div style={{ widht: "200px", height: "200px" }}>
              <ul>
                <li>{portfolio.pseudo}</li>
              </ul>
              <ButtonOpenPortfolio />
              <img src={portfolio.photo} />
            </div>
          ))
        )}
      </div>
    );
  }
}

export default PortfolioSection;

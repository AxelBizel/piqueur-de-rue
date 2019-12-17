import React, { Component } from 'react';
import axios from 'axios';

 class PortfolioSection extends Component {
  state = {
    portfolios: null
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/portfolio`)
      .then(res => {
          const portfoliosData = res.data
        this.setState({ portfolios: portfoliosData });
        console.log(this.state)
      })
  }

  render() {
    return (
      <ul>
        {this.state.portfolios === null
        ? <p>loading</p>
        : this.state.portfolios.map(portfolio => <li>{portfolio.pseudo}</li>)}
      </ul>
    )
  }
}

export default PortfolioSection;
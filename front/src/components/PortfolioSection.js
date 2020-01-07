import React, { Component } from "react";
import axios from "axios";
import ButtonOpenPortfolio from "./ButtonOpenPortfolio";
import gladys from "../img/tatoueurs/gladys.jpg";

class PortfolioSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolios: null
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/portfolio`).then(res => {
      const portfoliosData = res.data;
      this.setState({ portfolios: portfoliosData });
      console.log(this.state);
    });
  }

  render() {
    const { portfolios } = this.state;
    return (
      <div>
        <div>
          <h1 className="HeaderSection">NOS TATOUEURS</h1>
        </div>

        <div>
          {portfolios === null ? (
            <p>loading</p>
          ) : (
            portfolios.map(portfolio => (
              <div
                key={portfolio.id}
                style={{
                  widht: "500px",
                  height: "500px",
                  backgroundImage: `url(${gladys}`,
                  backgroundSize: "cover"
                }}
              >
                <ButtonOpenPortfolio portfolio={portfolio} />
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default PortfolioSection;

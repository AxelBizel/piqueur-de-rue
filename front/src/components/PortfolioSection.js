import React, { Component } from "react";
import axios from "axios";
import ButtonOpenPortfolio from "./ButtonOpenPortfolio";
import { Container, Row, Col } from "reactstrap";
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
      <div id='permanentartists'>
        <div>
          <h1 className="HeaderSection">NOS TATOUEURS</h1>
        </div>
        <Row>
          {portfolios === null ? (
            <p>loading</p>
          ) : (
            portfolios.map(portfolio => (
              <Col xs="12" md="6" xl="3">
                <div
                  key={portfolio.id}
                  style={{
                    width: "100%",
                    height: "500px",
                    backgroundImage: `url(${gladys}`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                  }}
                >
                  <ButtonOpenPortfolio portfolio={portfolio} />
                </div>
              </Col>
            ))
          )}
        </Row>
      </div>
    );
  }
}

export default PortfolioSection;

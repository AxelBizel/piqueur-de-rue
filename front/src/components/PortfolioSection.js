import React, { Component } from "react";
import axios from "axios";
import AOS from "aos";
import ButtonOpenPortfolio from "./ButtonOpenPortfolio";
import { Container, Row, Col, Spinner } from "reactstrap";
import "./PortfolioSection.css";
import "aos/dist/aos.css";

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
      <div id="permanentartists">
        <div>
          <h1 className="HeaderSection">
            <div className="FirstLineTeam" data-aos="fade-right">Notre
            </div>
            <div className="SecondLineTeam" data-aos="fade-left">Team</div>
          </h1>
        </div>
        <Container>
          <Row>
            {portfolios === null ? (
              <div className="Artists-Loader">
                <Spinner type="grow" color="dark" />
                <Spinner type="grow" color="dark" />
                <Spinner type="grow" color="dark" />
                <Spinner type="grow" color="dark" />
              </div>
            ) : (
              portfolios.map(portfolio => (
                <Col xs="12" md="6" lg="3">
                  <div
                    className="Artists"
                    key={portfolio.id}
                    style={{
                      margin: "2vh auto",
                      backgroundImage: `url(${require("../img/tatoueurs/portraits-500px/" +
                        `${portfolio.id}` +
                        ".jpg")})`
                    }}
                  >
                    <ButtonOpenPortfolio portfolio={portfolio} />
                  </div>
                </Col>
              ))
            )}
          </Row>
        </Container>
      </div>
    );
  }
}

export default PortfolioSection;

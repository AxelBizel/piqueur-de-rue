import React, { Component } from "react";
import axios from "axios";
import ButtonOpenPortfolio from "./ButtonOpenPortfolio";
import { Container, Row, Col, Spinner } from "reactstrap";
import "./PortfolioSection.css";
import "aos/dist/aos.css";
import { IPserver } from "../conf/confIP";


class PortfolioSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolios: null,
      img: null
    };
  }

  componentDidMount() {
    axios.get(`${IPserver}/api/portfolio/team/active`).then(res => {
      const portfoliosData = res.data;
      this.setState({ portfolios: portfoliosData });
    });
  }

  render() {
    const { portfolios } = this.state;
    return (
      <div className="permanentArtists">
        <div>
          <h1 className="HeaderSection">
            <div className="FirstTitleLineTeam" data-aos="fade-right">
              Notre
            </div>
            <div className="SecondTitleLineTeam" data-aos="fade-left">
              Team
            </div>
          </h1>
        </div>
        <Container>

          <Row style={{ justifyContent: 'center' }}>
            {portfolios === null ? (
              <div className="Artists-Loader">
                <Spinner type="grow" color="dark" />
                <Spinner type="grow" color="dark" />
                <Spinner type="grow" color="dark" />
                <Spinner type="grow" color="dark" />
              </div>
            ) : (
                portfolios.map((portfolio, index) => (
                  <Col xs="12" md="6" lg="3">
                    <div
                      className="Artists"
                      // data-aos-duration={index * 800}
                      // data-aos="fade-up"
                      key={`portfolio-${index}`}
                      style={{
                        margin: "2vh auto",
                        backgroundImage:
                          "url(${IPserver}/img/" +
                          `${portfolio.id}` +
                          "/portrait)"
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

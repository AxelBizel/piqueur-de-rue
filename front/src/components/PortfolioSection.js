import React, { Component } from "react";
import axios from "axios";
import AOS from 'aos'
import ButtonOpenPortfolio from "./ButtonOpenPortfolio";
import { Container, Row, Col } from "reactstrap";
import gladys from "../img/tatoueurs/gladys.jpg";
import 'aos/dist/aos.css';
import './PortfolioSection.css';

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
        <h1 className="HeaderSection"><div className="FirstLineTeam" data-aos="fade-right" data-aos-offset="700" data-aos-duration="800">Notre</div><div className="SecondLineTeam" data-aos="fade-left" data-aos-offset="700" data-aos-duration="800">Team</div></h1>
        </div>
        <Container>
          <Row>
            {portfolios === null ? (
              <p>loading</p>
            ) : (
              portfolios.map(portfolio => (
                <Col xs="12" md="6" xl="3">
                  <div className="Artists"
                    key={portfolio.id}
                    /*style={{
                      width: "100%",
                      height: "450px",
                      backgroundImage: `url(${gladys}`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}*/
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

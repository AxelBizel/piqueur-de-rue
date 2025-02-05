import React, { Component } from "react";
import {
  Collapse,
  CardHeader,
  CardBody,
  Card,
  Container,
  Row,
  Col
} from "reactstrap";
import section1 from "../img/projet/1rendezvous.jpg";
import section2 from "../img/projet/2dessin.jpg";
import section3 from "../img/projet/3simulation.jpg";
import section4 from "../img/projet/4realisation.jpg";
import ButtonOpenFormProject from "./ButtonOpenFormProject";
import "./YourProjectAccordion.css";

class YourProjectAccordion extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      showModal: false,
      collapse: 1,
      sections: [
        {
          id: 1,
          title: "Rendez-vous",
          text: `Première prise de contact où l’on discute de votre projet tattoo autour d’un café.
          Nous définirons ensemble les possibilités techniques de réalisation, le style, l’emplacement, le tatoueur qui vous prendra en charge, ainsi qu’une estimation du prix.`,
          img: `${section1}`
        },
        {
          id: 2,
          title: "Dessin",
          text: `Un dessin finalisé sera réalisé suite à des échanges préalables.`,
          img: `${section2}`
        },
        {
          id: 3,
          title: "Simulation",
          text: `Suite à des photos prises de vous lors du premier rendez-vous, une incrustation du dessin final vous sera envoyée. Vous aurez alors une vision fidèle du rendu final de votre futur tattoo.`,
          img: `${section3}`
        },
        {
          id: 4,
          title: "Réalisation",
          text: `Une fois que le projet proposé sera validé, un rendez-vous sera programmé pour la réalisation de celui-ci.`,
          img: `${section4}`
        }
      ]
    };
  }

  toggle(e) {
    let event = e.target.dataset.event;
    this.setState({
      collapse: this.state.collapse === Number(event) ? 0 : Number(event)
    });
  }

  openModal = e => {
    let { showModal } = this.state;
    e.preventDefault();
    showModal = true;
    this.setState({ showModal });
  };

  closeModal = () => {
    let { showModal } = this.state;
    showModal = false;
    this.setState({ showModal });
  };

  render() {
    const { collapse, sections } = this.state;

    return (
      <Container>
        <h1 className="HeaderSection">
          <div className="FirstTitleLineProject" data-aos="fade-right">
            Votre
          </div>
          <div className="SecondTitleLineProject" data-aos="fade-right">
            Projet
          </div>
          <div className="ThirdTitleLineProject" data-aos="fade-left">
            TATTOO
          </div>
        </h1>
        {sections.map((section, index) => {
          return (
            <Card style={{ marginBottom: "1rem" }} key={section.id}>
              <CardHeader
                onClick={this.toggle}
                data-event={section.id}
                style={{
                  margin: "0",
                  cursor: "pointer",
                  borderRadius: "3px",
                  backgroundColor: "#ffffff",
                  fontWeight: "100"
                }}
                className="accordionTitle"
              >
                {section.title}
              </CardHeader>
              <Collapse isOpen={collapse === section.id}>
                <CardBody
                  style={{
                    backgroundImage: `url(${section.img})`,
                    height: "70vh",
                    backgroundSize: "cover",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end"
                  }}
                >
                  <Row>
                    <Col xs="12" md="6"></Col>
                    <Col xs="12" md="6">
                      <div className="step">
                        <p className="TextSub">{section.text}</p>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Collapse>
            </Card>
          );
        })}
        <div className="divButton">
          <ButtonOpenFormProject />
        </div>
      </Container>
    );
  }
}

export default YourProjectAccordion;

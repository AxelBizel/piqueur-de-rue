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
import ButtonOpenFormTatoueurs from "./ButtonOpenFormTatoueurs";
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
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et posuere dolor. Aliquam condimentum lacus a velit scelerisque, id rhoncus lorem laoreet. Morbi sollicitudin metus tellus, vulputate semper erat egestas
          quis.`,
          img: `${section1}`
        },
        {
          id: 2,
          title: "Dessin",
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et posuere dolor. Aliquam condimentum lacus a velit scelerisque, id rhoncus lorem laoreet. Morbi sollicitudin metus tellus, vulputate semper erat egestas
          quis.`,
          img: `${section2}`
        },
        {
          id: 3,
          title: "Simulation",
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et posuere dolor. Aliquam condimentum lacus a velit scelerisque, id rhoncus lorem laoreet. Morbi sollicitudin metus tellus, vulputate semper erat egestas
          quis.`,
          img: `${section3}`
        },
        {
          id: 4,
          title: "Realisation",
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et posuere dolor. Aliquam condimentum lacus a velit scelerisque, id rhoncus lorem laoreet. Morbi sollicitudin metus tellus, vulputate semper erat egestas
          quis.`,
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
      <div>
        <h1 className="HeaderSection">VOTRE PROJET</h1>
        <Container>
          {sections.map(section => {
            return (
              <Card style={{ marginBottom: "1rem" }} key={section.id}>
                <CardHeader
                  onClick={this.toggle}
                  data-event={section.id}
                  style={{ margin: "0", borderRadius: "3px", backgroundColor:'#ffffff' }}
                  className="Title"
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
          <ButtonOpenFormTatoueurs />
        </Container>
      </div>
    );
  }
}

export default YourProjectAccordion;

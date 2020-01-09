import React, { Component } from "react";
import "./yourproject.css";
import ModalContactProject from "../components/modalContactProject";
import { Container, Row, Col } from "reactstrap";

/*MODAL CONTACT PROJET*/

export default class YourProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
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
    return (
      <div>
        <h1 className="HeaderSection">VOTRE PROJET EN ÉTAPE</h1>
        <div className="yourproject">
          <div className="ProjectSection1">
            <Container>
              <Row>
                <Col xs="12" md="6">
                  <div className="step">
                    <h3 className="Title">LE RENDEZ-VOUS</h3>
                    <p className="TextSub">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur et posuere dolor. Aliquam condimentum lacus a
                      velit scelerisque, id rhoncus lorem laoreet. Morbi
                      sollicitudin metus tellus, vulputate semper erat egestas
                      quis.
                    </p>
                  </div>
                </Col>
                <Col xs="12" md="6">
                  <div></div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="ProjectSection2">
            <Container>
              <Row>
                <Col xs="12" md="6">
                  <div></div>
                </Col>
                <Col xs="12" md="6">
                  <div className="step">
                    <h3 className="Title">DESSIN</h3>
                    <p className="TextSub">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur et posuere dolor. Aliquam condimentum lacus a
                      velit scelerisque, id rhoncus lorem laoreet. Morbi
                      sollicitudin metus tellus, vulputate semper erat egestas
                      quis.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="ProjectSection3">
            <Container>
              <Row>
                <Col xs="12" md="6">
                  <div className="step">
                    <h3 className="Title">SIMULATION</h3>
                    <p className="TextSub">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur et posuere dolor. Aliquam condimentum lacus a
                      velit scelerisque, id rhoncus lorem laoreet. Morbi
                      sollicitudin metus tellus, vulputate semper erat egestas
                      quis.
                    </p>
                  </div>
                </Col>
                <Col xs="12" md="6">
                  <div></div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="ProjectSection4">
            <Container>
              <Row>
                <Col xs="12" md="6">
                  <div></div>
                </Col>
                <Col xs="12" md="6">
                  <div className="step">
                    <h3 className="Title">RÉALISATION</h3>
                    <p className="TextSub">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur et posuere dolor. Aliquam condimentum lacus a
                      velit scelerisque, id rhoncus lorem laoreet. Morbi
                      sollicitudin metus tellus, vulputate semper erat egestas
                      quis.
                    </p>
                  </div>
                </Col>
              </Row>
              
              
            </Container>
                <button
                  className="buttonContactProject"
                  onClick={this.openModal}
                >
                  NOUS CONTACTER
                </button>
                <ModalContactProject
                  showModal={this.state.showModal}
                  closeModal={this.closeModal}
                />
          </div>
        </div>
      </div>
    );
  }
}

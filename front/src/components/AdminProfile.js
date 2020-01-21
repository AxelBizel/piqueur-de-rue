import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col, CustomInput, Table, Button } from "reactstrap";
import ButtonAdminPortfolio from "./ButtonAdminPortfolio";

class AdminProfile extends Component {
  state = {
    active: false,
    portfoliosActive: false,
    portfolios: [],
    selectedPortfolio: {}
  };

  async componentDidMount() {
    this.getPortfolio();
    this.togglePortfolio = this.togglePortfolio.bind(this);
  }
  //Partie : Statue - Portfolio

  getPortfolio = async () => {
    try {
      const result = await axios.get(`http://localhost:5000/api/portfolios`);
      console.log("getPortfolio", result.data);
      this.setState({ portfolios: result.data });
    } catch (err) {
      console.log(err);
    }
  };

  async togglePortfolio(id, active) {
    console.log('togglePortfolio', id, active);
    try {
      const result = await axios.put(
        `http://localhost:5000/api/portfolio/${id}`,
        { active: !active }
      );
      console.log(result.data);
      this.getPortfolio();
    } catch (err) {
      console.log(err);
    }
  }
  // Partie : Profile

    getProfile = async id => {
      console.log("youpi", id);
      try {
        const result = await axios.get(
          `http://localhost:5000/api/portfolios/${id}`
        );
        console.log("gg", result.data);
        this.setState({ selectedPortfolio: result.data[0] });
      } catch (err) {
        console.log(err);
        this.setState({
          error: err.message
        });
      }
    };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h1 style={{ textAlign: "center" }}>Administration</h1>
              <br></br>
              <br></br>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Portfolios</h3>
              <Table hover responsive>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Pseudo</th>
                    <th>Type</th>
                    <th>Active</th>
                    <th>On/Off</th>
                    <th>Modifier</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.portfolios.map((pf, index) => (
                    <tr>
                      <td>{pf.id}</td>
                      <td>{pf.pseudo}</td>
                      <td>{pf.type}</td>
                      <td>{pf.active === 1 ? "Oui" : "Non"}</td>
                      <td>
                        <CustomInput
                          key={`ci-${index}`}
                          onChange={() => {
                            console.log(pf.id);
                            this.togglePortfolio(pf.id, pf.active);
                          }}
                          type="switch"
                          id={`ci-${index}`}
                          checked={pf.active}
                        ></CustomInput>
                      </td>
                      <td>
                        <ButtonAdminPortfolio
                          key={`profile-${index}`}
                          getCurrentProfile={() => this.getProfile(pf.id)}
                          portfolio={this.state.selectedPortfolio}
                        >
                          Détails
                        </ButtonAdminPortfolio>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td></td>
                    <td colSpan="4">
                      <strong>Ajouter un portfolio</strong>
                    </td>
                    <td colSpan="2">
                      <Button style={{ margin: "0", padding: "5" }}>
                        Ajouter
                      </Button>
                    </td>
                  </tr>
                </tfoot>
              </Table>
            </Col>
          </Row>

          {/* 
          <Row>
            <Col>
              <h3>Users</h3>
              <Table hover responsive>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Login</th>
                    <th>Password</th>
                    <th>Active</th>
                    <th>On/Off</th>
                    <th>Modifier</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.portfolios.map((pf, index) => (
                    <tr>
                      <td>{pf.id}</td>
                      <td>{pf.pseudo}</td>
                      <td>{pf.type}</td>
                      <td>{pf.active === 1 ? "Oui" : "Non"}</td>
                      <td>
                        <CustomInput
                          key={`ci-${index}`}
                          onChange={() => {
                            console.log(pf.id);
                            this.togglePortfolio(pf.id, pf.active);
                          }}
                          type="switch"
                          id={`ci-${index}`}
                          checked={pf.active}
                        ></CustomInput>
                      </td>
                      <td>
                        <ButtonAdminPortfolio
                          key={`profile-${index}`}
                          getCurrentProfile={() => this.getProfile(pf.id)}
                          portfolio={this.state.selectedPortfolio}
                        >
                          Détails
                        </ButtonAdminPortfolio>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td>+</td>
                    <td colSpan='4'>
                      <strong>Ajouter un portfolio</strong>
                    </td>
                    <td colSpan='2'>
                      <Button style={{margin:'0', padding:'5'}}>Ajouter</Button>
                    </td>
                  </tr>
                </tfoot>
              </Table>
            </Col>
          </Row> */}
        </Container>
      </div>
    );
  }
}

export default AdminProfile;

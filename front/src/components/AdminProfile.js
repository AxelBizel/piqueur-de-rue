import React, { Component } from "react";
import axios from "axios";
import { Container, Row, CustomInput, Table } from "reactstrap";
import ButtonAdminPortfolio from "./ButtonAdminPortfolio";

class AdminProfile extends Component {
  state = {
    active: false,
    portfoliosActive: false,
    portfolios: [],
    selectedPortfolio: {},

    adminportfolio: null,
    createProfile: true
  };

  async componentDidMount() {
    this.getPortfolio();
    this.togglePortfolio = this.togglePortfolio.bind(this);
  }
  //Partie : Statue - Portfolio

  getPortfolio = async () => {
    try {
      const result = await axios.get(`http://localhost:5000/api/portfolios`);
      console.log("gg", result.data);
      this.setState({ portfolios: result.data });
    } catch (err) {
      this.setState({
        error: err.message
      });
    }
  };

  async togglePortfolio(id, active) {
    console.log(id, active);
    try {
      const result = await axios.put(
        `http://localhost:5000/api/portfolio/${id}`,
        { active: !active }
      );
      console.log(result.data);
      this.getPortfolio();
    } catch (err) {
      this.setState({
        error: err.message
      });
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
            <h1>Portfolios</h1>
            <Table>
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
                          style={{padding:'0', margin:'0'}}
                        >
                         Détails
                        </ButtonAdminPortfolio>
                      </td>
                    </tr>
                ))}
              </tbody>
            </Table>
          </Row>
          {/* <Row>
            {this.state.portfolios.map((p, i) => (
              <ButtonAdminPortfolio
                key={`profile-${i}`}
                getCurrentProfile={() => this.getProfile(p.id)}
                portfolio={this.state.selectedPortfolio}
              >
               Modifier
              </ButtonAdminPortfolio>
            ))}
          </Row> */}
        </Container>
      </div>
    );
  }
}

export default AdminProfile;

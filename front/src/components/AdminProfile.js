import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col, CustomInput, Table } from "reactstrap";
import AdminUpdatePortfolio from "./AdminUpdatePortfolio";
import AdminAddPortfolio from "./AdminAddPortfolio";
import Logout from "./Logout";
import AdminUpdateUsers from "./AdminUpdateUsers";
import AdminAddUsers from "./AdminAddUsers";
import {IPserver} from '../conf/confIP'




const StyleLogout = {
  display : "flex",
  justifyContent : "center",
  alignItems : "center",
  padding : "70px",
}

class AdminProfile extends Component {
  state = {
    active: false,
    portfoliosActive: false,
    portfolios: [],
    users:[],
    selectedPortfolio: {}
  };

  async componentDidMount() {
    this.getPortfolio();
    this.togglePortfolio = this.togglePortfolio.bind(this);
    this.getUser();
    this.toggleUser = this.toggleUser.bind(this);
  }


  //Partie : Statue - Portfolio

  getPortfolio = async () => {
    try {
      const result = await axios.get(`${IPserver}/api/portfolios`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`
        }
      });
      this.setState({ portfolios: result.data });
    } catch (err) {
    }
  };


  getUser = async () => {
    try {
      const result = await axios.get(`${IPserver}/admin/users`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`
        }
      });
      this.setState({ users: result.data });
    } catch (err) {
      console.log(err);
    }
  };

  async togglePortfolio(id, active) {
    try {
      const result = await axios.put(
        `${IPserver}/api/portfolio/${id}`,
        { active: !active }
      );
      console.log(result.data);
      this.getPortfolio();
    } catch (err) {
      console.log(err);
    }
  }


  async toggleUser(id, active) {
    try {
      const result = await axios.put(
        `${IPserver}/admin/users/${id}`,
        { active: !active }
      );
      this.getUser();
    } catch (err) {
      console.log(err);
    }
  }
  // Partie : Profile

  getProfile = async id => {
    try {
      const result = await axios.get(
        `${IPserver}/api/portfolios/${id}`
      );
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
                    <tr key={pf.id}>
                      <td>{pf.id}</td>
                      <td>{pf.pseudo}</td>
                      <td>{pf.type}</td>
                      <td>{pf.active === 1 ? "Oui" : "Non"}</td>
                      <td>
                        <CustomInput
                          key={`ci-${index}`}
                          onChange={() => {
                            this.togglePortfolio(pf.id, pf.active);
                          }}
                          type="switch"
                          id={`ci-${index}`}
                          checked={pf.active}
                        ></CustomInput>
                      </td>
                      <td>
                        <AdminUpdatePortfolio
                          key={`profile-${index}`}
                          getCurrentProfile={() => this.getProfile(pf.id)}
                          portfolio={pf}
                          index={index}
                        >
                          Détails
                        </AdminUpdatePortfolio>
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
                      <AdminAddPortfolio index={this.state.portfolios.length+1}>Ajouter</AdminAddPortfolio>
                    </td>
                  </tr>
                </tfoot>
              </Table>
            </Col>
          </Row>

          <Row>
            <Col>
              <h3>Utilisateurs</h3>
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
                  {this.state.users.map((user, index) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.login}</td>
                      <td>{user.password}</td>
                      <td>{user.active === 1 ? "Oui" : "Non"}</td>
                      <td>
                        <CustomInput
                          key={`user-${index}`}
                          onChange={() => {
                            this.toggleUser(user.id, user.active);
                          }}
                          type="switch"
                          id={`user-${index}`}
                          checked={user.active}
                        ></CustomInput>
                      </td>
                      <td>
                        <AdminUpdateUsers
                          key={`profile-${index}`}
                          getCurrentProfile={() => this.getProfile(user.id)}
                          user={user}
                          index={index}
                        >
                          Détails
                        </AdminUpdateUsers>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td></td>
                    <td colSpan="4">
                      <strong>Ajouter un utilisateur</strong>
                    </td>
                    <td colSpan="2">
                      <AdminAddUsers index={this.state.users.length+1}>Ajouter</AdminAddUsers>
                    </td>
                  </tr>
                </tfoot>
              </Table>
            </Col>
          </Row>


        </Container>
        <div style={StyleLogout}>
          <Logout/>
        </div>
      </div>
    );
  }
}

export default AdminProfile;

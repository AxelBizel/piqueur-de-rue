import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

class AdminAddUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      newUser: {
        login: "",
        password: "",
        active :1
      },
      active: true
    };
  }

  toggle = () => {
    const { modal } = this.state;
    this.setState({ modal: !modal });
  };

  onChange = e => {
    const { newUser } = this.state;
    this.setState(
      {
        newUser: { ...newUser, [e.target.name]: e.target.value }
      },
      () => console.log("ggss", this.state.newUser)
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    let { newUser } = this.state;
    axios
      .post("http://localhost:5000/admin/users/", newUser)
      .then(() => {
        alert("Modifications prises en compte.");
        this.toggle();
      });
  };

 

  render() {
    const { modal } = this.state;

    return (
      <div>
        <Button
          onClick={this.toggle}
          style={{ margin: "0", padding: "5", width: "auto" }}
        >
          {this.props.children}
        </Button>

        <Modal isOpen={modal} fade={false} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Ajouter un utilisateur</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="pseudo">Login :</Label>

                <Input
                  onChange={this.onChange}
                  type="text"
                  name="login"
                  id="login"
                  placeholder="Ajouter un login"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="type">Mot de passe :</Label>
                <Input
                  type="text"
                  name="password"
                  id="password"
                  placeholder="Ajouter un mot de passe"
                  onChange={this.onChange}
                  required
                >
                </Input>
              </FormGroup>

            </Form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.handleSubmit} color="primary">
              Envoyer
            </Button>
            <Button color="danger" onClick={this.toggle}>
              Annuler
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AdminAddUsers;
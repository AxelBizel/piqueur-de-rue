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
import {IPserver} from '../conf/confIP'



class AdminUpdateUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      newUser: {
        login: "",
        password: "",
        ...props.user
      },
      active: true
    };
  }


  toggle = () => {
    const { modal } = this.state;
    this.props.getCurrentProfile();
    this.setState({ modal: !modal });
  };

  onChange = e => {
    const { newUser } = this.state;
    this.setState(
      {
        newUser: { ...newUser, [e.target.name]: e.target.value }
      },
    );
  };

  handleSubmit = event => {
    event.preventDefault();

    let { newUser } = this.state;
    let { user } = this.props;
    axios
      .put(
        `${IPserver}/admin/user/${user.id}`,
        newUser
      )
      .then(() => {
        alert("Modifications prises en compte.");
        this.toggle();
      });
  };


  render() {
    const { modal } = this.state;
    const { user } = this.props;

    return (
      <div>
        <Button
          onClick={this.toggle}
          style={{ margin: "0", padding: "5", width: "auto" }}
        >
          {this.props.children}
        </Button>

        <Modal isOpen={modal} fade={false} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modifier l'utilisateur'</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="pseudo">Login : {user.login}</Label>

                <Input
                  onChange={this.onChange}
                  type="text"
                  name="login"
                  id="login"
                  placeholder="Modifier le login"
                />
              </FormGroup>

              <FormGroup>
                <Label for="type">Mot de passe : {user.password}</Label>
                <Input
                  type="text"
                  name="password"
                  id="password"
                  placeholder="Modifier le mot de passe"
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

export default AdminUpdateUsers;

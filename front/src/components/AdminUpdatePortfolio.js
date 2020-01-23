import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

class AdminUpdatePortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      newPortfolio: {
        pseudo: "",
        type: "",
        presentation: "",
        insta: "",
        style: "",
        ...props.portfolio
      },
      active: true
    };
  }

  getNewPortfolio = () => ({
    pseudo: "",
    type: "",
    presentation: "",
    insta: "",
    style: ""
  });

  toggle = () => {
    const { modal } = this.state;
    this.props.getCurrentProfile();
    this.setState({ modal: !modal });
  };

  onChange = e => {
    const { newPortfolio } = this.state;
    this.setState(
      {
        newPortfolio: { ...newPortfolio, [e.target.name]: e.target.value }
      },
      () => console.log("ggss", this.state.newPortfolio)
    );
  };

  handleSubmit = event => {
    event.preventDefault();

    let { newPortfolio } = this.state;
    let { portfolio } = this.props;
    axios
      .put(
        `http://localhost:5000/admin/portfolio/${portfolio.id}`,
        newPortfolio
      )
      .then(() => {
        alert("Modifications prises en compte.");
        this.toggle();
      });
  };

  render() {
    const { modal } = this.state;
    const { portfolio } = this.props;

    return (
      <div>
        <Button
          onClick={this.toggle}
          style={{ margin: "0", padding: "5", width: "auto" }}
        >
          {this.props.children}
        </Button>

        <Modal isOpen={modal} fade={false} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modifier le portfolio</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="pseudo">
                  Pseudo : {portfolio.pseudo}
                </Label>

                <Input
                  onChange={this.onChange}
                  type="text"
                  name="pseudo"
                  id="pseudo"
                  placeholder="modifier le pseudo"
                />
              </FormGroup>

              <FormGroup>
                <Label for="type">Type : {portfolio.type}</Label>
                <Input
                  type="select"
                  name="type"
                  id="type"
                  onChange={this.onChange}
                  required
                >
                  <option>Team</option>
                  <option>Guest</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="presentation">
                  Présentation :
                  <FormText color="muted">
                    {portfolio.presentation}
                  </FormText>
                </Label>

                <Input
                  onChange={this.onChange}
                  type="textarea"
                  name="presentation"
                  id="presentation"
                  placeholder="Modifier le texte de présentation"
                />
              </FormGroup>

              <FormGroup>
                <Label for="insta">Instagram : {portfolio.insta}</Label>

                <Input
                  type="text"
                  name="insta"
                  id="insta"
                  placeholder="Modifier le lien instagram"
                  onChange={this.onChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="style">Style : {portfolio.style}</Label>

                <Input
                  type="text"
                  name="style"
                  id="style"
                  placeholder="modifier le style"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="portrait">
                  Avatar
                  <FormText color="muted">
                    Merci d'uploader une image carrée (idéalement 500px X 500px)
                  </FormText>
                </Label>
                <Input type="file" name="avatar" id="avatar" />
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

export default AdminUpdatePortfolio;

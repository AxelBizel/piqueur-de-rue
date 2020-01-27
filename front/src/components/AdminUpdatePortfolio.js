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
        startdate: "",
        enddate: "",
        style: "",
        ...props.portfolio
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
        `http://admin/portfolio/${portfolio.id}`,
        newPortfolio
      )
      .then(() => {
        alert("Modifications prises en compte.");
        this.toggle();
        this.onUpload();
      });
  };

  imageHandler = event => {
    this.setState({
      selectedAvatar: event.target.files[0],
      loaded: 0
    });
    console.log(event.target.files[0]);
  };

  onUpload = () => {
    const data = new FormData();
    data.append("file", this.state.selectedAvatar);
    axios
      .put(
        `http://upload/portfolio/${this.props.portfolio.id}/avatar`,
        data,
        {
          // receive two    parameter endpoint url ,form data
        }
      )
      .then(res => {
        // then print response status
        console.log(res.statusText);
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
                <Label for="pseudo">Pseudo : {portfolio.pseudo}</Label>

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
                  <option>team</option>
                  <option>guest</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="presentation">
                  Présentation :
                  <FormText color="muted">{portfolio.presentation}</FormText>
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

              {(portfolio.type === "guest" ||
                this.state.newPortfolio.type === "guest") && (
                <div>
                  <FormGroup>
                    <Label for="startdate">
                      Date de début : {portfolio.startdate}
                    </Label>
                    <FormText color="muted">
                      Uniquement pour les guests
                    </FormText>
                    <Input
                      type="text"
                      name="startdate"
                      id="startdate"
                      placeholder="Modifier la date de début en toutes lettres"
                      onChange={this.onChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="style">Date de fin : {portfolio.enddate}</Label>
                    <FormText color="muted">
                      Uniquement pour les guests
                    </FormText>
                    <Input
                      type="text"
                      name="endtdate"
                      id="enddate"
                      placeholder="Modifier la date de fin en toutes lettres"
                      onChange={this.onChange}
                      required
                    />
                  </FormGroup>
                </div>
              )}
              <FormGroup>
                <Label for="portrait">
                  Avatar
                  <FormText color="muted">
                    Merci d'uploader une image carrée (idéalement 500px X 500px)
                  </FormText>
                </Label>
                <Input
                  type="file"
                  name="avatar"
                  id="avatar"
                  accept="image/jpeg, image/jpg, image/png, image/gif"
                  onChange={this.imageHandler}
                />
              </FormGroup>

              <FormGroup>
                <Label for="réalisations">
                  Réalisations
                  <FormText color="muted">
                    Merci d'uploader des images carrées (idéalement 500px X
                    500px)
                  </FormText>
                </Label>
                <Input
                  type="file"
                  name="realisations"
                  id="realisations"
                  accept="image/jpeg, image/jpg, image/png, image/gif"
                  multiple
                />
                 <Button onClick={this.onUpload}>Upload</Button>
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

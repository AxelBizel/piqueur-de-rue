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
import {IPserver} from '../conf/confIP'



class AdminAddPortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      selectedAvatar: null,
      selectedImages:null,
      newPortfolio: {
        pseudo: "",
        type: "team",
        presentation: "",
        insta: "",
        startdate:"",
        enddate:"",
        style: ""
      },
      active: true
    };
  }

  toggle = () => {
    const { modal } = this.state;
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
    axios
      .post(`${IPserver}/admin/portfolio/`, newPortfolio)
      .then(() => {
        alert("Modifications prises en compte.");
        this.onUpload();
        this.onUploadMultiple();
        this.toggle();
      });
  };

  imageHandler = event => {
    this.setState({
      selectedAvatar: event.target.files[0],
      loaded: 0
    });
    console.log(event.target.files[0]);
  };

  imageHandlerMultiple = event => {
    this.setState({
      selectedImages: event.target.files,
        });
  };

  onUpload = () => {
    const data = new FormData();
    data.append("file", this.state.selectedAvatar);
    axios
      .post(
        `${IPserver}/upload/portfolio/${this.props.index}/avatar`,
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

  onUploadMultiple = () => {
    const data = new FormData();
    for (let i= 0; i < this.state.selectedImages.length; i++) {
      data.append("files", this.state.selectedImages[i]);
    }
    axios
      .post(
        `${IPserver}/upload/portfolio/${this.props.index}/images`,
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

    return (
      <div>
        <Button
          onClick={this.toggle}
          style={{ margin: "0", padding: "5", width: "auto" }}
        >
          {this.props.children}
        </Button>

        <Modal isOpen={modal} fade={false} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Ajouter un portfolio</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="pseudo">Pseudo :</Label>

                <Input
                  onChange={this.onChange}
                  type="text"
                  name="pseudo"
                  id="pseudo"
                  placeholder="Ajouter un pseudo"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="type">Type :</Label>
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
                <Label for="presentation">Présentation :</Label>

                <Input
                  onChange={this.onChange}
                  type="textarea"
                  name="presentation"
                  id="presentation"
                  placeholder="Ajouter un texte de présentation"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="insta">Instagram : </Label>

                <Input
                  type="text"
                  name="insta"
                  id="insta"
                  placeholder="Ajouter un lien instagram"
                  onChange={this.onChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="style">Style :</Label>
                <Input
                  type="text"
                  name="style"
                  id="style"
                  placeholder="Ajouter un style"
                  onChange={this.onChange}
                  required
                />
              </FormGroup>

              {this.state.newPortfolio.type==='guest' && (
                <div>
                  <FormGroup>
                    <Label for="startdate">
                      Date de début : 
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
                    <Label for="style">Date de fin :</Label>
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
                <Label for="avatar">
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
                  required
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
                  onChange={this.imageHandlerMultiple}
                  multiple
                />
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

export default AdminAddPortfolio;

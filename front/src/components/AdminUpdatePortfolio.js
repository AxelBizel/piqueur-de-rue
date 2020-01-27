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
  ModalFooter,
  CustomInput
} from "reactstrap";

class AdminUpdatePortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      img: "",
      selectedAvatar: null,
      selectedImages: null,
      newPortfolio: {
        pseudo: "",
        type: "team",
        presentation: "",
        insta: "",
        startdate: "",
        enddate: "",
        style: "",
        ...props.portfolio
      },
      active: true
    };
    this.toggleImg = this.toggleImg.bind(this);
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

    let { newPortfolio, selectedImages } = this.state;
    let { portfolio } = this.props;
    axios
      .put(
        `http://localhost:5000/admin/portfolio/${portfolio.id}`,
        newPortfolio
      )
      .then(() => {
        alert("Modifications prises en compte.");
        this.onUpload();
        if (selectedImages !==null){
          this.onUploadMultiple();;
        }

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
      selectedImages: event.target.files
    });
  };

  onUpload = () => {
    const data = new FormData();
    data.append("file", this.state.selectedAvatar);
    axios
      .post(
        `http://localhost:5000/upload/portfolio/${this.props.portfolio.id}/avatar`,
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
    for (let i = 0; i < this.state.selectedImages.length; i++) {
      data.append("files", this.state.selectedImages[i]);
    }
    axios
      .post(
        `http://localhost:5000/upload/portfolio/${this.props.portfolio.id}/images`,
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

  async toggleImg(id, active) {
    console.log("togglePortfolio", id, active);
    try {
      const result = await axios.put(
        `http://localhost:5000/admin/images/${id}`,
        { active: !active }
      );
      console.log(result.data);
      this.getImg();
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/images/real/+${this.props.portfolio.id}`)
      .then(res => {
        const imgData = res.data;
        this.setState({ img: imgData });
        console.log(this.state);
      });
  }

  getImg() {
    axios
      .get(`http://localhost:5000/api/images/real/+${this.props.portfolio.id}`)
      .then(res => {
        const imgData = res.data;
        this.setState({ img: imgData });
        console.log(this.state);
      });
  }
  // async componentDidMount(){
  //   this.toggleImg();
  // }

  render() {
    const { modal, img } = this.state;
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
                      name="enddate"
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
                  Attention, le fichier doit être au format.jpg. Merci d'uploader une image carrée (idéalement 500px X 500px)
                  </FormText>
                </Label>
                <Input
                  type="file"
                  name="avatar"
                  id="avatar"
                  accept="image/jpeg, image/jpg"
                  onChange={this.imageHandler}
                />
                <div
                  style={{
                    display: "inline-block",
                    padding: "1vh",
                    margin: "1vh",
                    border: "1px solid grey",
                    backgroundImage:
                      "url(http://localhost:5000/img/" +
                      `${portfolio.id}` +
                      "/portrait.jpg)",
                    backgroundSize: "cover",
                    width: "100px",
                    height: "100px"
                  }}
                ></div>
              </FormGroup>

              <FormGroup>
                <Label for="réalisations">
                  Réalisations
                  <FormText color="muted">
                    Merci d'uploader des images carrées (idéalement 500px X
                    500px)
                  </FormText>
                  {img === "" ? (
                    <p>loading </p>
                  ) : (
                    img.map((img, index) => (
                      <div
                        style={{
                          display: "inline-block",
                          padding: "1vh",
                          margin: "1vh",
                          border: "1px solid grey"
                        }}
                      >
                        <img
                          src={img.path}
                          style={{ width: "100px", height: "100px" }}
                        />
                        <CustomInput
                          key={`user-${index}`}
                          onChange={() => {
                            this.toggleImg(img.id, img.active);
                          }}
                          type="switch"
                          id={`img-${index}`}
                          checked={img.active}
                        ></CustomInput>
                      </div>
                    ))
                  )}
                </Label>
                <Input
                  type="file"
                  name="realisations"
                  id="realisations"
                  onChange={this.imageHandlerMultiple}
                  accept="image/jpeg, image/jpg, image/png, image/gif"
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

export default AdminUpdatePortfolio;

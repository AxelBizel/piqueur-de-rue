import React, { Component } from "react";
import axios from 'axios';
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


class ButtonAdminPortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
     
      item : this.getItem(),
      active : true ,

    };
  }

  getItem = () => ({
    pseudo: "",
    type: "",
    presentation: "",
    style: "",
  
}) 


  // async componentDidMount() {
  //   this.formSubmit = this.formSubmit.bind(this)
  //   this.onChange = this.onChange.bind(this);
  // }

  
  toggle = () => {
    const { modal } = this.state;
    this.props.getCurrentProfile();
    this.setState({ modal: !modal })
  }

  //Partie Axios

  onChange = (e) => {
    const {item} = this.state;
    item[e.target.name]=e.target.value
    this.setState({ item })
}

handleSubmit = (event, id) => {
  let { item } = this.state;
  axios
      .put(`http://localhost:5000/admin/portfolio/${id}`,item)
      .then(console.log("update yaaaaa"))
  this.setState({
      item: this.getItem(),
  })
  event.preventDefault();
}
  




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
          <ModalHeader toggle={this.toggle}>&nbsp;</ModalHeader>
          <ModalBody>
            <Form onSubmit= {this.formSubmit}>
              <FormGroup>
                <Label 
                  onChange= {this.onChange}
                  for="pseudo">
                  {/* Pseudo : {this.props.portfolio.pseudo} */}
                  Pseudo : {this.state.pseudo}
                  
                  </Label>

                <Input
                  onChange= {this.onChange}
                  type="text"
                  name="pseudo"
                  id="pseudo"
                  placeholder="modifier le pseudo"
                />
              </FormGroup>

              <FormGroup>
                <Label 
                onChange= {this.onChange}
                for="type">
                  {/* Type : {this.props.portfolio.type}  */}
                  Type : {this.state.type} 

                </Label>
                <Input type="select" name="type" id="type">
                  <option>Team</option>
                  <option>Guest</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label 
                onChange= {this.onChange}
                for="presentation">
                  Présentation :{" "}
                  <FormText color="muted">
                    {/* {this.props.portfolio.presentation} */}
                    {this.state.presentation}
                  </FormText>
                </Label>

                <Input
                  onChange= {this.onChange}
                  type="textarea"
                  name="presentation"
                  id="presentation"
                  placeholder="modifier le texte de présentation"
                />
              </FormGroup>
              <FormGroup>
                <Label 
                onChange= {this.onChange}
                for="style">
                  {/* Style : {this.props.portfolio.style} */}
                  Style : {this.state.style}
                </Label>

                <Input
                  type="text"
                  name="style"
                  id="style"
                  placeholder="modifier le style"
                />
              </FormGroup>
              <FormGroup>
                <Label for="portrait">Portrait <FormText color="muted">
                  Merci d'uploader une image carrée (idéalement 500px X 500px)
                </FormText></Label>
                <Input type="file" name="file" id="exampleFile" />
              </FormGroup>

              <Button
               onChange= {() => this.togglePortfolio()}
                style={{ margin: "2vh auto" }}>Envoyer</Button>
              <Button style={{ margin: "2vh auto" }} onClick={this.toggle}>
                Annuler
            </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );


  }
};

export default ButtonAdminPortfolio;

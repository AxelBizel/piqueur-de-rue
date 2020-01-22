import React, { Component } from "react";
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
      modal: true,
    };
  }

  
  toggle = () => {
    const { modal } = this.state;
    this.props.getCurrentProfile();
    this.setState({ modal: !modal })
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
            <Form>
              <FormGroup>
                <Label for="pseudo">Pseudo : {this.props.portfolio.pseudo}</Label>

                <Input
                  type="text"
                  name="pseudo"
                  id="pseudo"
                  placeholder="modifier le pseudo"
                />
              </FormGroup>

              <FormGroup>
                <Label for="type">Type : {this.props.portfolio.type} </Label>
                <Input type="select" name="type" id="type">
                  <option>Team</option>
                  <option>Guest</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="presentation">
                  Présentation :{" "}
                  <FormText color="muted">
                    {this.props.portfolio.presentation}
                  </FormText>
                </Label>

                <Input
                  type="textarea"
                  name="presentation"
                  id="presentation"
                  placeholder="modifier le texte de présentation"
                />
              </FormGroup>
              <FormGroup>
                <Label for="style">Style : {this.props.portfolio.style}</Label>

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

import React, { useState } from "react";
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

const ButtonAdminPortfolio = props => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => {
    props.getCurrentProfile();
    setModal(!modal);
  };

  return (
    <div>
      <Button
        onClick={toggle}
        style={{ margin: "0", padding: "5", width: "auto" }}
      >
        {props.children}
      </Button>

      <Modal isOpen={modal} fade={false} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modifier le portfolio</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="pseudo">Pseudo : {props.portfolio.pseudo}</Label>
              <Input
                type="text"
                name="pseudo"
                id="pseudo"
                placeholder="modifier le pseudo"
              />
            </FormGroup>

            <FormGroup>
              <Label for="insta">Instagram : {props.portfolio.insta}</Label>
              <Input
                type="text"
                name="insta"
                id="insta"
                placeholder="modifier le lien instagram"
              />
            </FormGroup>

            <FormGroup>
              <Label for="type">Type : {props.portfolio.type} </Label>
              <Input type="select" name="type" id="type">
                <option>Team</option>
                <option>Guest</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="presentation">
                Présentation :{" "}
                <FormText color="muted">
                  {props.portfolio.presentation}
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
              <Label for="style">Style : {props.portfolio.style}</Label>

              <Input
                type="text"
                name="style"
                id="style"
                placeholder="modifier le style"
              />
            </FormGroup>
            <FormGroup>
              <Label for="portrait">
                Avatar{" "}
                <FormText color="muted">
                  Merci d'uploader une image carrée (ex: 500px X 500px)
                </FormText>
              </Label>
              <Input type="file" name="file" id="exampleFile" />
            </FormGroup>

            <FormGroup>
              <Label for="portrait">
                Réalisations{" "}
                <FormText color="muted">
                  Merci d'uploader des images carrées (ex: 500px X 500px)
                </FormText>
              </Label>
              <Input type="file" name="file" id="exampleFile" multiple />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button>Envoyer</Button>
          <Button onClick={toggle}>Annuler</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ButtonAdminPortfolio;

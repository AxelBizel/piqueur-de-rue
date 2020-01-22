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

const AdminAddPortfolio = props => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => {
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
        <ModalHeader toggle={toggle}>Ajouter un portfolio</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="pseudo">Pseudo :</Label>
              <Input
                type="text"
                name="pseudo"
                id="pseudo"
                placeholder="Ajouter un pseudo"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="insta">Instagram : </Label>
              <Input
                type="text"
                name="insta"
                id="insta"
                placeholder="Ajouter le lien instagram"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="type">Type : </Label>
              <Input type="select" name="type" id="type" required>
                <option>Team</option>
                <option>Guest</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="presentation">
                Présentation :
              </Label>

              <Input
                type="textarea"
                name="presentation"
                id="presentation"
                placeholder="Ajouter un texte de présentation"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="style">Style : </Label>

              <Input
                type="text"
                name="style"
                id="style"
                placeholder="modifier le style"
              />
            </FormGroup>
            <FormGroup>
              <Label for="portrait">
                Avatar
                <FormText color="muted">
                  Merci d'uploader une image carrée (ex: 500px X 500px)
                </FormText>
              </Label>
              <Input type="file" name="file" id="portrait" required/>
            </FormGroup>

            <FormGroup>
              <Label for="portrait">
                Réalisations
                <FormText color="muted">
                  Merci d'uploader des images carrées (ex: 500px X 500px)
                </FormText>
              </Label>
              <Input type="file" name="file" id="realisations" multiple />
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

export default AdminAddPortfolio;

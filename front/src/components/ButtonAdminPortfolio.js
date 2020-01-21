import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ButtonAdminPortfolio = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => {
    props.getCurrentProfile();
    setModal(!modal);
  }
 

  return (
    <div>
      <Button color="danger" onClick={toggle}>{props.children}</Button>
      <Modal isOpen={modal} fade={false} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
         {props.portfolio.pseudo}
        </ModalBody>
        {props.portfolio.type}
        <ModalBody>
         {props.portfolio.presentation}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ButtonAdminPortfolio;
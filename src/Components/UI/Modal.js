import { Button, Modal } from "react-bootstrap";

function ModalCustom(props) {
  console.log(props.message);
  return (
    <Modal show={props.showModal} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.message.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.message.detail}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCustom;

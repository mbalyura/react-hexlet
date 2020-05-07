import React from 'react';
import { Modal, FormGroup } from 'react-bootstrap';

export default function Remove(props) {
  const { handleRemoveTask, hideModal, currentTask } = props;
  return (
    <Modal.Dialog>
      <Modal.Header closeButton onClick={hideModal}>
        <Modal.Title>Remove</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleRemoveTask(currentTask)}>
          <FormGroup>
            <input className="btn btn-danger" type="submit" value="remove" />
          </FormGroup>
        </form>
      </Modal.Body>
    </Modal.Dialog>
  );
}

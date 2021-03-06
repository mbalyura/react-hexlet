import React from 'react';
import { Modal, FormGroup } from 'react-bootstrap';

export default function Remove(props) {
  const { updateTasks, hideModal, currentTask } = props;

  const removeTask = (e) => {
    e.preventDefault();
    updateTasks((tasks) => tasks.filter((task) => task.id !== currentTask.id));
    hideModal();
  };

  return (
    <Modal.Dialog>
      <Modal.Header closeButton onClick={hideModal}>
        <Modal.Title>Remove</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={removeTask}>
          <FormGroup>
            <input className="btn btn-danger" type="submit" value="remove" />
          </FormGroup>
        </form>
      </Modal.Body>
    </Modal.Dialog>
  );
}

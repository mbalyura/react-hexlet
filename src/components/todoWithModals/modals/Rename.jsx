import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { Modal, FormGroup, FormControl } from 'react-bootstrap';

export default function Rename(props) {
  const { updateTasks, hideModal, currentTask } = props;
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  const formik = useFormik({
    onSubmit: (values) => {
      updateTasks((tasks) => {
        const taskToRename = tasks.find((task) => task.id === currentTask.id);
        taskToRename.text = values.body;
      });
      hideModal();
    },
    initialValues: { body: currentTask.text },
  });

  return (
    <Modal.Dialog>
      <Modal.Header closeButton onClick={hideModal}>
        <Modal.Title>Rename</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <FormControl
              onChange={formik.handleChange}
              data-testid="input-body"
              name="body"
              required
              value={formik.values.body}
              ref={inputRef}
            />
          </FormGroup>
          <input className="btn btn-primary" type="submit" value="submit" />
        </form>
      </Modal.Body>
    </Modal.Dialog>
  );
}

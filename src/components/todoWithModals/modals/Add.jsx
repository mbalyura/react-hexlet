import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import _ from 'lodash';
import { Modal, FormGroup, FormControl } from 'react-bootstrap';

export default function Add(props) {
  const { updateTasks, hideModal } = props;
  const inputRef = useRef();

  const formik = useFormik({
    onSubmit: (values) => {
      const task = { text: values.body, id: _.uniqueId() };
      updateTasks((tasks) => {
        tasks.push(task);
      });
      hideModal();
    },
    initialValues: { body: '' },
  });

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <Modal.Dialog>
      <Modal.Header closeButton onHide={hideModal}>
        <Modal.Title>Add</Modal.Title>
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

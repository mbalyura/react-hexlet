import React from 'react';
import { useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import { Modal, FormGroup, FormControl } from 'react-bootstrap';

export default function Add(props) {
  const { handleUpdateTasks, hideModal } = props;
  const [text, updateText] = useState('');
  const inputRef = useRef();
  const task = { text, id: _.uniqueId() };

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = ({ target }) => {
    updateText(target.value);
  };

  return (
    <Modal.Dialog>
      <Modal.Header closeButton onHide={hideModal}>
        <Modal.Title>Add</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleUpdateTasks(task)}>
          <FormGroup>
            <FormControl
              onChange={handleChange}
              data-testid="input-body"
              name="body"
              required
              value={text}
              ref={inputRef}
            />
          </FormGroup>
          <input className="btn btn-primary" type="submit" value="submit" />
        </form>
      </Modal.Body>
    </Modal.Dialog>
  );
};

import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Modal, FormGroup, FormControl } from 'react-bootstrap';

export default function Rename(props) {
  const { handleUpdateTasks, hideModal, currentTask } = props;
  const [text, updateText] = useState(currentTask.text);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = ({ target }) => {
    updateText(target.value);
  };

  return (
    <Modal.Dialog>
      <Modal.Header closeButton onClick={hideModal}>
        <Modal.Title>Rename</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleUpdateTasks({ text, id: currentTask.id })}>
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

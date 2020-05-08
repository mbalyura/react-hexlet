import React from 'react';
// import { useEffect, useRef } from 'react';
// import { useFormik } from 'formik';
import { Modal, FormGroup, FormControl } from 'react-bootstrap';

export default class Rename extends React.Component {
  constructor() {
    super();
    this.state = { text: '' };
    this.textInput = React.createRef();
  }

  componentDidMount() {
    const { currentTask } = this.props;
    this.setState({ text: currentTask.text });
    this.textInput.current.focus();
  }

  handleChange = ({ target }) => {
    this.setState({ text: target.value });
  }

  render() {
    const { handleUpdateTasks, hideModal, currentTask } = this.props;
    const { text } = this.state;

    return (
      <Modal.Dialog>
        <Modal.Header closeButton onClick={hideModal}>
          <Modal.Title>Rename</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleUpdateTasks({ text, id: currentTask.id })}>
            <FormGroup>
              <FormControl
                onChange={this.handleChange}
                data-testid="input-body"
                name="body"
                required
                value={text}
                ref={this.textInput}
              />
            </FormGroup>
            <input className="btn btn-primary" type="submit" value="submit" />
          </form>
        </Modal.Body>
      </Modal.Dialog>
    );
  }
}

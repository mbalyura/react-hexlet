import React from 'react';
// import { useEffect, useRef } from 'react';
// import { useFormik } from 'formik';
import _ from 'lodash';
import { Modal, FormGroup, FormControl } from 'react-bootstrap';

export default class Add extends React.Component {
  constructor() {
    super();
    this.state = { text: '' };
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focus();
  }

  handleChange = ({ target }) => {
    this.setState({ text: target.value });
  }

  render() {
    const { handleUpdateTasks, hideModal } = this.props;
    const { text } = this.state;
    const task = { text, id: _.uniqueId() };
    return (
      <Modal.Dialog>
        <Modal.Header closeButton onHide={hideModal}>
          <Modal.Title>Add</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleUpdateTasks(task)}>
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

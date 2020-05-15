import React from 'react';
import getModal from './modals/index';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      currentTask: null,
      mode: 'tasklist',
    };
  }

  hideModal = () => {
    this.setState({ mode: 'tasklist' });
  }

  showModal = (currentTask, mode) => () => {
    this.setState({ currentTask, mode });
  }

  handleUpdateTasks = (task) => (e) => {
    e.preventDefault();
    const { tasks, mode } = this.state;
    const newTasks = {
      adding: () => [task, ...tasks],
      renaming: () => tasks.map((t) => (t.id === task.id ? task : t)),
      removing: () => tasks.filter((t) => t.id !== task.id),
    };
    this.setState({ tasks: newTasks[mode](), mode: 'tasklist' });
  }

  renderTasklist() {
    const { tasks } = this.state;
    return (
      <>
        {tasks.map((task) => (
          <div key={task.id}>
            <span className="mr-3">{task.text}</span>
            <button
              onClick={this.showModal(task, 'renaming')}
              type="button"
              className="border-0 btn-link mr-3 p-0"
              data-testid="item-rename"
            >
              rename
            </button>
            <button
              onClick={this.showModal(task, 'removing')}
              type="button"
              className="border-0 btn-link p-0"
              data-testid="item-remove"
            >
              remove
            </button>
          </div>
        ))}
      </>
    );
  }

  renderModal() {
    const { mode, currentTask } = this.state;
    if (mode === 'tasklist') return null;
    const Modal = getModal(mode);
    return (
      <Modal
        handleUpdateTasks={this.handleUpdateTasks}
        hideModal={this.hideModal}
        currentTask={currentTask}
      />
    );
  }

  render() {
    return (
      <>
        <div className="mb-3">
          <button
            onClick={this.showModal(null, 'adding')}
            type="button"
            className="btn btn-secondary"
            data-testid="item-add"
          >
            add
          </button>
        </div>
        {this.renderTasklist()}
        {this.renderModal()}
      </>
    );
  }
}

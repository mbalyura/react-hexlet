import React from 'react';
// import { useState } from 'react';
// import { useImmer } from 'use-immer';
import getModal from './modals/index';

// NOTE use web hooks with https://github.com/immerjs/use-immer

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

  showAddModal = () => {
    this.setState({ mode: 'adding' });
  }

  showRenameModal = (currentTask) => (e) => {
    e.preventDefault();
    this.setState({ currentTask, mode: 'renaming' });
  }

  showRemoveModal = (currentTask) => (e) => {
    e.preventDefault();
    this.setState({ currentTask, mode: 'removing' });
  }

  handleAddTask = (task) => (e) => {
    e.preventDefault();
    const { tasks } = this.state;
    this.setState({ tasks: [task, ...tasks], mode: 'tasklist' });
  }

  handleRenameTask = (task) => (e) => {
    e.preventDefault();
    const { tasks } = this.state;
    const i = tasks.findIndex((t) => t.id === task.id);
    const newTasks = [...tasks.slice(0, i), task, ...tasks.slice(i + 1)];
    this.setState({ tasks: newTasks, mode: 'tasklist' });
  }

  handleRemoveTask = ({ id }) => (e) => {
    e.preventDefault();
    const { tasks } = this.state;
    const newTasks = tasks.filter((t) => t.id !== id);
    this.setState({ tasks: newTasks, mode: 'tasklist' });
  }

  renderTasklist() {
    const { tasks } = this.state;
    return (
      <>
        {tasks.map((task) => (
          <div key={task.id}>
            <span className="mr-3">{task.text}</span>
            <button
              onClick={this.showRenameModal(task)}
              type="button"
              className="border-0 p-0 btn-link mr-3"
              data-testid="item-rename"
            >
              rename
            </button>
            <button
              onClick={this.showRemoveModal(task)}
              type="button"
              className="border-0 p-0 btn-link"
              data-testid="item-remove"
            >
              remove
            </button>
          </div>
        ))}
      </>
    );
  }

  render() {
    const { mode, currentTask } = this.state;
    const Modal = getModal(mode);
    return (
      <>
        <div className="mb-3">
          <button
            onClick={this.showAddModal}
            type="button"
            className="btn btn-secondary"
            data-testid="item-add"
          >
            add
          </button>
        </div>
        {this.renderTasklist()}
        {mode !== 'tasklist'
          && (
            <Modal
              handleAddTask={this.handleAddTask}
              handleRemoveTask={this.handleRemoveTask}
              handleRenameTask={this.handleRenameTask}
              hideModal={this.hideModal}
              currentTask={currentTask}
            />
          )}
      </>
    );
  }
}

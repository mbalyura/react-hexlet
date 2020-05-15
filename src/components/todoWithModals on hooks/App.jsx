import React from 'react';
import { useState } from 'react';
import getModal from './modals/index';

export default function App() {
  const [state, updateState] = useState({
    tasks: [],
    currentTask: null,
    mode: 'tasklist',
  });
  console.log('App -> state', state);

  const hideModal = () => {
    updateState({ ...state, mode: 'tasklist' });
  };

  const showModal = (currentTask, mode) => () => {
    updateState({ ...state, currentTask, mode });
  };

  const handleUpdateTasks = (task) => (e) => {
    e.preventDefault();
    const { tasks, mode } = state;
    const newTasks = {
      adding: () => [task, ...tasks],
      renaming: () => tasks.map((t) => (t.id === task.id ? task : t)),
      removing: () => tasks.filter((t) => t.id !== task.id),
    };
    updateState({ ...state, tasks: newTasks[mode](), mode: 'tasklist' });
  };

  const renderTasklist = () => {
    const { tasks } = state;
    return (
      <>
        {tasks.map((task) => (
          <div key={task.id}>
            <span className="mr-3">{task.text}</span>
            <button
              onClick={showModal(task, 'renaming')}
              type="button"
              className="border-0 btn-link mr-3 p-0"
              data-testid="item-rename"
            >
              rename
            </button>
            <button
              onClick={showModal(task, 'removing')}
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
  };

  const renderModal = () => {
    const { mode, currentTask } = state;
    if (mode === 'tasklist') return null;
    const Modal = getModal(mode);
    return (
      <Modal
        handleUpdateTasks={handleUpdateTasks}
        hideModal={hideModal}
        currentTask={currentTask}
      />
    );
  };

  return (
    <>
      <div className="mb-3">
        <button
          onClick={showModal(null, 'adding')}
          type="button"
          className="btn btn-secondary"
          data-testid="item-add"
        >
          add
        </button>
      </div>
      {renderTasklist()}
      {renderModal()}
    </>
  );
}

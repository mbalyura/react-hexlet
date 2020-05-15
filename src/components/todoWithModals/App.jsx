import React, { useState } from 'react';
import { useImmer } from 'use-immer';
import getModal from './modals/index';

// ! using web hooks immer && formik

export default function App() {
  const [state, updateState] = useState({
    currentTask: null,
    mode: 'tasklist',
  });

  const [tasks, updateTasks] = useImmer([]);

  const hideModal = () => {
    updateState({ ...state, mode: 'tasklist' });
  };

  const showModal = (currentTask, mode) => () => {
    updateState({ currentTask, mode });
  };

  const renderTasklist = () => (
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

  const renderModal = () => {
    const { mode, currentTask } = state;
    if (mode === 'tasklist') return null;
    const Modal = getModal(mode);
    return (
      <Modal
        updateTasks={updateTasks}
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

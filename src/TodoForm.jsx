import React from 'react';

function TodoForm({ taskName, setTaskName, description, setDescription, addTodo, editIndex, errors, setErrors }) {
  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
    if (errors.taskName) {
      setErrors((prevErrors) => ({ ...prevErrors, taskName: '' }));
    }
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    if (errors.description) {
      setErrors((prevErrors) => ({ ...prevErrors, description: '' }));
    }
  };

  return (
    <div className='form'>
      <div className="row">
        <div className="col-5">
          <input
            type="text"
            className={`form-control border ${errors.taskName ? 'border-danger' : 'border-success'}`}
            value={taskName}
            onChange={handleTaskNameChange}
            placeholder="Task Name"
          />
          {errors.taskName && <div className="text-danger">{errors.taskName}</div>}
        </div>
        <div className="col-5">
          <input
            type="text"
            className={`form-control border ${errors.description ? 'border-danger' : 'border-success'}`}
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Description"
          />
          {errors.description && <div className="text-danger">{errors.description}</div>}
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success btn-sm"
            style={{ width: '100%', height: '40px', borderRadius: '10px' }}
            onClick={addTodo}
          >
            {editIndex !== null ? 'Update Todo' : 'Add Todo'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoForm;

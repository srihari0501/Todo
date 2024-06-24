import { useState } from 'react';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('not completed');
  const [editIndex, setEditIndex] = useState(null);
  const [filter, setFilter] = useState('all');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!taskName) newErrors.taskName = 'Task name is required';
    if (!description) newErrors.description = 'Description is required';
    return newErrors;
  };

  const addTodo = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = { taskName, description, status };
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, { taskName, description, status: 'not completed' }]);
    }
    setTaskName('');
    setDescription('');
    setStatus('not completed');
    setErrors({});
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = (index, newStatus) => {
    const todoToEdit = todos[index];
    setTaskName(todoToEdit.taskName);
    setDescription(todoToEdit.description);
    setStatus(newStatus || todoToEdit.status);
    setEditIndex(index);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    return todo.status === filter;
  });

  return (
    <div className='container'>
      <h4 className="text-center" style={{ color: "green" }}>My Todo</h4>
      <TodoForm
        taskName={taskName}
        setTaskName={setTaskName}
        description={description}
        setDescription={setDescription}
        status={status}
        setStatus={setStatus}
        addTodo={addTodo}
        editIndex={editIndex}
        errors={errors}
        setErrors={setErrors}  // Pass setErrors to the form
      />
      <div className="d-flex justify-content-between align-items-center ">
        <div>
          <h4 className="fw-bold content">My Todos</h4>
        </div>
        <div>
          <h4 className="fw-bold">
            Status Filter :  
            <select className="btn btn-danger"  style={{ marginLeft: '15px', borderRadius: '0px' }} value={filter} onChange={handleFilterChange}>
              <option value="all">All</option>
              <option value="not completed">Not Completed</option>
              <option value="completed">Completed</option>
            </select>
          </h4>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
        <TodoList todos={filteredTodos} deleteTodo={deleteTodo} editTodo={editTodo} />
      </div>
    </div>
  );
}

export default App;

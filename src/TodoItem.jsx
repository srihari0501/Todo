import React from 'react'

function TodoItem({ todo, index, deleteTodo, editTodo }) {
  return (
    <div className="col">
    <div className="card" style={{ border: '1px solid black', margin:'3px',padding:'20px',backgroundColor:'rgb(153, 224, 153)'}}>
      <p className="text-start">Name:{todo.taskName}</p>
      <p className="text-start">Description:{todo.description}</p>
      <div className="text-start">
      Status
      <select className={todo.status === 'completed' ? 'btn btn-success' : 'btn btn-danger'}  style={{marginLeft:'15px',borderRadius:'0px'}} value={todo.status} onChange={(e) => editTodo(index, e.target.value)} >
        <option value="not completed">Not Completed</option>
        <option  value="completed">Completed</option>
      </select>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
      <button  className="btn btn-success" onClick={() => editTodo(index)}>Edit</button>
      <button className="btn btn-danger" onClick={() => deleteTodo(index)}>Delete</button>
    </div>
    </div>
    </div>
  )
}

export default TodoItem
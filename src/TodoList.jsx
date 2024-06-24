import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ todos, deleteTodo, editTodo }) {
  return (
    <>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} deleteTodo={deleteTodo} editTodo={editTodo} />
      ))}
    </>
  )
}

export default TodoList
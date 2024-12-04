import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false   
 },
  ]);

  const handleAddTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo)   => todo.id !== id));
  };

  return (
    <div>   

      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through'   
 : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>   

        ))}
      </ul>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const input = e.target.elements.todoInput;
          handleAddTodo(input.value);
          input.value = '';
        }}
      >
        <input type="text" id="todoInput" placeholder="Add a todo" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default TodoList;
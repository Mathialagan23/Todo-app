import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo._id, todo.completed)}
          className="todo-checkbox"
        />
        <div className="todo-text-container">
          <span className="todo-title">{todo.title}</span>
          {todo.description && (
            <span className="todo-description">{todo.description}</span>
          )}
        </div>
      </div>
      <button
        onClick={() => onDelete(todo._id)}
        className="todo-delete-button"
        aria-label="Delete todo"
      >
        ×
      </button>
    </div>
  );
};

export default TodoItem;


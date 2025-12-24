import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todos, onToggle, onDelete }) => {
  const [showAll, setShowAll] = useState(false);
  const ITEMS_TO_SHOW = 5;

  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p>No todos yet. Add one to get started!</p>
      </div>
    );
  }

  const displayedTodos = showAll ? todos : todos.slice(0, ITEMS_TO_SHOW);
  const remainingCount = todos.length - ITEMS_TO_SHOW;
  const hasMoreTodos = todos.length > ITEMS_TO_SHOW;

  return (
    <>
      <div className="todo-list">
        {displayedTodos.map(todo => (
          <TodoItem
            key={todo._id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </div>
      {hasMoreTodos && !showAll && (
        <button 
          className="show-more-button"
          onClick={() => setShowAll(true)}
        >
          Show More ({remainingCount})
        </button>
      )}
      {showAll && hasMoreTodos && (
        <button 
          className="show-more-button"
          onClick={() => setShowAll(false)}
        >
          Show Less
        </button>
      )}
    </>
  );
};

export default TodoList;


import React from "react";
import "../SCSS/TodoList.scss";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos,onRemove,onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map(todos => (
        <TodoListItem 
        todo={todos} 
        key={todos.id} 
        onRemove={onRemove} 
        onToggle={onToggle}/>
      ))}
    </div>
  );
};

export default TodoList;

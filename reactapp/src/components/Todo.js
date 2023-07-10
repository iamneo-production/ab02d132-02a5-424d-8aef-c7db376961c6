import React, { useState } from "react";
import "../styles/Todo.css";

function Todo() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [editItemId, setEditItemId] = useState(null);
  const [updatedText, setUpdatedText] = useState("");

  function addTodo() {
    if (!newItem) {
      alert("Please enter a todo item.");
      return;
    }

    const todoItem = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldList) => [...oldList, todoItem]);
    setNewItem("");
  }

  function deleteTodoItem(id) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  }

  function editTodoItem(id, text) {
    setEditItemId(id);
    setUpdatedText(text);
  }

  function updateTodoItem(id) {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          value: updatedText,
        };
      }
      return item;
    });

    setItems(updatedItems);
    setEditItemId(null);
    setUpdatedText("");
  }

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a todo..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {editItemId === item.id ? (
              <input
                type="text"
                value={updatedText}
                onChange={(e) => setUpdatedText(e.target.value)}
              />
            ) : (
              item.value
            )}
            {editItemId === item.id ? (
              <button onClick={() => updateTodoItem(item.id)}>Save</button>
            ) : (
              <button onClick={() => editTodoItem(item.id, item.value)}>Edit</button>
            )}
            <button
              className="delete-button"
              onClick={() => deleteTodoItem(item.id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;

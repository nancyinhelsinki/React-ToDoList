// can type React.useState or import React, {useState} from 'react';
import React from "react";
export default function ToDoListWithDelete() {
  //--todolist-- const [description, setDescription] = React.useState("");

  const [description, setDescription] = React.useState("");
  const [date, setDate] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const handleAddToDo = () => {
    setTodos([{ description, date }, ...todos]);
    console.log(todos);
    setDescription("");
    setDate("");
  };
  const handleDeleteToDo = (index) => {
    const result = [...todos];
    result.splice(index, 1);
    setTodos(result);
  };
  return (
    <div>
      <h1>My ToDos</h1>
      <input
        placeholder="Description"
        value={description}
        onChange={(event) => {
          console.log(event);
          setDescription(event.target.value);
        }}
      />
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button onClick={handleAddToDo}>Add Todos</button>

      <table>
        <th>
          <td>Description</td>

          <td>Date</td>
        </th>

        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.description}</td>
              <td>{todo.date}</td>
              <td>
                <button
                  onClick={(event) => {
                    console.log(event);
                    handleDeleteToDo(index);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
// can write here  export default  ToDoList;

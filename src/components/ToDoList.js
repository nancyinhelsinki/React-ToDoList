// can type React.useState or import React, {useState} from 'react';
import React from "react";
export default function ToDoList(props) {
  //--todolist-- const [description, setDescription] = React.useState("");

  return (
    <div>
      <table>
        <th>
          <td>Description</td>

          <td>Date</td>
        </th>

        <tbody>
          {props.todoItems.map((todo, index) => (
            <tr key={index}>
              <td>{todo.description}</td>
              <td>{todo.date}</td>
              <td>
                <button
                  onClick={(event) => {
                    console.log(event);
                    props.deleteTodo(index);
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

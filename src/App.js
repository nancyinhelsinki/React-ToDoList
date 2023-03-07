import React from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";

function App() {
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
    <div className="App">
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
      <ToDoList todoItems={todos} deleteTodo={handleDeleteToDo} />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Don's To Do List") });
  }
  
  function deleteTodo(id: string) {
    client.models.Todo.delete({ id })
  }
  return (
    <main>
      <h1>Don's To Dos</h1>
      <button onClick={createTodo}>Add a To Do</button>
      <ul>
        {todos.map((todo) => (
          <li 
                      onClick={() => deleteTodo(todo.id)}
            key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <div>
        Try creating a Don to do.
        <br />
      </div>
    </main>
  );
}

export default App;gh

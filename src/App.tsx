import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function App() {

  
 
  const [todos, setTodos] = useState<Array<Schema["MedMarOne TO Do"]["type"]>>([]);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Don's Todo Content") });
  }
 function deleteTodo(id: string) {
    client.models.Todo.delete({ id })
  }    return (
    <main>
      <h1>My todos</h1>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li 
            onClick={() => deleteTodo(todo.id)}            
            key={todo.id}>{todo.content}
          </li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. MedMarOne under construction.
        <br />        <a href="https://youtube.com">
          Go To YouTube
        </a>
      </div>
    </main>
  );
}

export default App;

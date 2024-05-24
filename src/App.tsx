function App() {
  // ...
  function deleteTodo(id: string) {
    client.models.Todo.delete({ id })
  }

  return (
    <main>
      <h1>My todos</h1>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map(todo => <li
          onClick={() => deleteTodo(todo.id)}
          key={todo.id}>
          {todo.content}
        </li>)}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
      
      </div>
    </main>
  )
}
      <div>
        🥳 App successfully hosted. Try creating a Don to do.
        <br />
        
      </div>

          <button onClick={signOut}>Sign out</button>
      
    </main>

    
      )

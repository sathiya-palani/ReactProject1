import Todo from "./components/Todo";


const App = () => {

  const todos = [
    { id: 1 , title : 'Buy Milk ', completed :false},
    { id: 2 , title :'Buy bread ', completed :false},
    { id: 3 , title : 'Buy butter ', completed :false}
  ]

  return (
    <div>
    <h1>Todo List</h1>
    <ul>
      {
        todos.map (todo =>
        <Todo 
        key={todo.id}
        todo={todo}
        />
        )
      }
    </ul>  
    </div>
  )
    
}

export default App;
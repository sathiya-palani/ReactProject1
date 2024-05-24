


const App = () => {

  const handleClick = () => {
    console.log("Button clicked");
  }
  
  return (
    <div>
      <h1>React App</h1>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  )
}

export default App
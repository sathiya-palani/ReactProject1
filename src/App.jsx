

const App = () => {

  const isLoggedIn = true;

  return (
    <div>
      { isLoggedIn && <h1>Welcome back!</h1>}
      { !isLoggedIn && <h1>Please log In</h1>}
      
    </div>
  )
    
}

export default App;
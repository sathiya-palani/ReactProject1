

const App = () => {

  const isLoggedIn = false;

  if (isLoggedIn) {
    return <h1>WelcomeBack</h1>;
  } else {
    return <h1>Please log In</h1>;
  }
    
}

export default App;
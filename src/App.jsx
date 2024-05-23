

// component App

const App = () => {

  const a = 10;
  const b = 20;
  const now = new Date ();

  return (
    <div>
      Date:{now.toString()}
      <p>{a} plus {b} is {a+b}</p>
    </div>
  )
}

export default App;


import Hello from "./components/Hello";
// component App

const App = () => {

  const name = 'Sathiya';

  return (
    <div>
     <Hello 
      name={name}
     />

    </div>
  )
}

export default App;

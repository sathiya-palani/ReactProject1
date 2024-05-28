
import { useEffect ,useState} from 'react';

const App = () => {

  let [count , setCount] = useState(0);

// runs when the component is mounted 
//whenever the state changes (within the component)
  useEffect (() => {
    console.log('component mounted');
  })

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    setCount(count - 1);
  }
  const handleReset = () => {
    setCount(0);
  }

  return (
    <div>
      <h1>Counter :{count}</h1>
      <button onClick ={handleIncrement}>Increment</button>
      <button onClick ={handleDecrement}>Decrement</button>
      <button onClick  ={handleReset}>Reset</button>
    </div>
  )
}

export default App;
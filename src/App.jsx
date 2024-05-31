import { createContext , useContext , useState } from "react";

 //1.Create a context to store the name 
const NameContext = createContext();

const D =() => {

  //3.Use the context in the component
  const{name} = useContext(NameContext);

  return <h1>Hello ,{name} !</h1>
}

const C = () => {
  return <D />
}

const B = () => {
  return <C />
}

//2.Wrap the component tree with the context provider
const App = () => {
    const [name , setName] =useState("John");

    return (
      <NameContext.Provider value ={{name}}>
        <B />
      </NameContext.Provider>
    )
}
export default App;
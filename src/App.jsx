import { createContext , useContext , useEffect, useState } from "react";

  import B from "./component/B";
 //1.Create a context to store the name 
const NameContext = createContext();


//2.Wrap the component tree with the context provider
const App = () => {
    const [name , setName] =useState("John");

    return (
      <NameContext.Provider value ={{name , setName}}>
        <B />
      </NameContext.Provider>
    )
}
export  { App as default , NameContext};
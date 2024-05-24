//  MULTIPLE CLASS 

import { Component } from "react";
class Hello extends Component {
  render () {
    return (
      <div>
        <h1>Hello , world</h1>
      </div>
    )
  }
}


class App extends Component {
 // override the render method
  render () {
    //return JSX
    return (
      <div>
        <Hello />
      </div>
    )
  }
}

export default App;



import React, { Component } from 'react';


class Hello extends Component {

  componentDidMount() {
    console.log('Hello Component mounted');
  }

   componentWillUnamount() {
    console.log('Hello componet unmounted');
   }

   render() {
    return (
      <h1>Hello World!</h1>
    )
   }
}

  
export class App extends Component {

 constructor(props) {
  super(props);
  this.state ={
    showHello : true    
  }
 }
  handleToggle =() => {
    this.setState ( {
      showHello: !this.state.showHello
    })
  }

  render () {
    return (
      <div>
        <button onClick={this.handleToggle}>Toggle Hello</button>
        {this.state.showHello && <Hello />}
      </div>
    )
  }
}

export default App;
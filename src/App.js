import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <form action='/insert' method='POST'>
          <input type='text' name='name' />
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default App;
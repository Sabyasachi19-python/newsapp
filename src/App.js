import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  my_name = "Sabyasachi";
  render() { 
    return (
      <div>
        Hello {this.my_name}, this is class based component
      </div>
    )
  }
}

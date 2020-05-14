import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';
import data from './data';

class App extends Component  {
constructor() {
  super();

  this.state = {
    person: data,
    index: 0
  }
  this.buttonNext = this.buttonNext.bind(this);
  this.buttonPrev = this.buttonPrev.bind(this);
}

buttonNext() {
  let nextIndex = this.state.index + 1

  if(nextIndex === this.state.person.length) {
    nextIndex = this.state.person.length -1
  }
  this.setState({index: nextIndex})
}
 
buttonPrev() {
  if(this.state.index === 0) 
  return;

  this.setState(element => ({
    index: element.index - 1
  }))
 
}

  render() {
    console.log(this.state.index)

    return (
      <div className="App">
        <header className = 'nav-header'>
          <h3>Home</h3>
        </header>
          <Person person = {this.state.person[this.state.index]}/>
        <div className="nav-bar-below">
          <button className= "prev-next" onClick = {this.buttonPrev}>Previous</button>
          <div>
            <button className = "buttons">Edit</button>
            <button className = "buttons">Delete</button>
            <button className = "buttons">New</button>
          </div>
          <button className= "prev-next" onClick = {this.buttonNext}>Next ></button>
        </div>
      </div>
    );
  }

}

export default App;

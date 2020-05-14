import React, { Component } from 'react';
import './App.css';

class App extends Component  {
constructor() {
  super();

  this.state = {
    person: []
  }
}

  render() {
    return (
      <div className="App">
        <header className = 'nav-header'>
          <h3>Home</h3>
        </header>
        <div className= "person-container">
          <div className = "page-counter">1/25</div>
          <div className= "person-info-child">
              <h4>Firstname</h4>
              <br></br>
              <p><span>From:</span> example: Liverpool, United Kingdom</p>
              <p><span>Job Title:</span> example: Liverpool, United Kingdom</p>
              <p><span>Employeer:</span> example: Liverpool, United Kingdom</p>
              <br></br>
              <p><span>Favorite Movies:</span></p>
                <ol>
                  <li>Back To the Future</li>
                  <li>Tron</li>
                  <li>Men in Black</li>
                </ol>
          </div>
        </div>
        <div className="nav-bar-below">
          <button className= "prev-next">Previous</button>
          <div>
            <button className = "buttons">Edit</button>
            <button className = "buttons">Delete</button>
            <button className = "buttons">New</button>
          </div>
          <button className= "prev-next">Next ></button>
        </div>
      </div>
    );
  }

}

export default App;

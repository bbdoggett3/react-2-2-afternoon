/***********************************************
 * Here is the Navigate child component
 * which will take the method in as a prop 
 * from the App.js component and allow the user
 * to click forward or back through the data
 ***********************************************/
import React from 'react';

function Navigate(props) {
    return <div className="nav-bar-below">
    <button className= "prev-next" onClick = {props.prev}>Previous</button>
    <div>
      <button className = "buttons">Edit</button>
      <button className = "buttons">Delete</button>
      <button className = "buttons">New</button>
    </div>
    <button className= "prev-next" onClick = {props.next}>Next ></button>
  </div>

}

export default Navigate;
import React from 'react';

function Person(props) {
    return <div className= "person-container">
    <div className = "page-counter">{props.person.id}/25</div>
    <div className= "person-info-child">
        <h4>{props.person.name.first} {props.person.name.last}</h4>
        <br></br>
        <p><span>City:</span> {props.person.city}</p>
        <p><span>Country:</span> {props.person.country}</p>
        <p><span>Employeer:</span> {props.person.employer}</p>
        <p><span>Job Title:</span> {props.person.title}</p>
        <br></br>
        <p><span>Favorite Movies:</span></p>
          <ol>
            <li>{props.person.favoriteMovies[0]}</li>
            <li>{props.person.favoriteMovies[1]}</li>
            <li>{props.person.favoriteMovies[2]}</li>
          </ol>
    </div>
  </div>
}

export default Person;
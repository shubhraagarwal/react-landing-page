import '../Styles/Card.css';
import React from 'react';
import Categories from './Categories';
import {Button} from 'react-bootstrap';
// import {BrowserRouter, Link} from 'react-router-dom';


function Card(Categories) {
  return (
    <div className="Card">
      <h1 className="card-h1">{Categories.name}</h1> <br />
      {console.log(Categories)}
      <a href={`#${Categories.id}`}>
        <Button className="mb-5">Go to section</Button>
      </a>
    </div>
  );
}

export default Card;

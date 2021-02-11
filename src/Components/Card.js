import '../Styles/Card.css';
import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import Collapse from 'react-bootstrap/Collapse';
import Categories from './Categories' ;

function HandleClick(Categories){
    const [open, setOpen] = useState(false);

    return(
        <div>
            <Collapse in={open}>
      <div className='content' id="example-collapse-text">
        <ul>
            <li>abcd</li>
            <li>efgh</li>
            <li>ijkl</li>
            <li>mnop</li>
            <li>qrst</li>
            <li>uvwx</li>
            <li>xyz</li>
            <li>123</li>
            <li>456</li>
            <li>7890</li>
            
        </ul>
      </div>
      </Collapse>
      <Button className='mb-5' onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        >
          See More
      </Button>
        </div>
    );

}


function Card(props) {
  return (
    <div className="Card">
      <h1 className='card-h1'>{props.name}</h1> <br />
     <HandleClick />
    </div>
  );
}

export default Card;

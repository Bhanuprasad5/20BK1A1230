import React from 'react';
import './card.css';
function card(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default card
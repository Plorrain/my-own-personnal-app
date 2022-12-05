import React from 'react';

import './Card.module.css';

const Card = (props) => {
  return (
    <div className='card'>{props.children}</div>
    // line above: should look like {`${classes.card} ${props.className}`}
    // if classes css was used
  );
};

export default Card;

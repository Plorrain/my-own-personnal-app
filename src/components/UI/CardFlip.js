import React, { useState, Fragment } from 'react';
import ReactCardFlip from "react-card-flip";
import './CardFlip.css';

function CardFlip() {
  const [flip, setFlip] = useState(false);
  return (
    <Fragment>
      <ReactCardFlip isFlipped={flip}
          flipDirection="vertical">
        <div className='front-card'>
            <br />
            <br />
            <button className='button-front-card'
              onClick={() => setFlip(!flip)}>
                Learn more
            </button>
        </div>
        <div className='back-card'>
          <br />
            <button className='button-back-card'
              onClick={() => setFlip(!flip)}>
              Done
            </button>
        </div>
      </ReactCardFlip>
    </Fragment>
  );
}

export default CardFlip;

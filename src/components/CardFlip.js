import React, { useState } from 'react';
import ReactCardFlip from "react-card-flip";
import './CardFlip.css';

function CardFlip() {
  const [flip, setFlip] = useState(false);
  return (
      <ReactCardFlip isFlipped={flip}
          flipDirection="vertical">
        <div className='front-card'>
          Hi✨ my name is Philippine...
            <br />
            <br />
            <button className='button-front-card'
              onClick={() => setFlip(!flip)}>
                Learn more
            </button>
        </div>
        <div className='back-card'> I made this card using React.
          <br />
            <button className='button-back-card'
              onClick={() => setFlip(!flip)}>
              Flip Back
            </button>
        </div>
      </ReactCardFlip>
  );
}

export default CardFlip;

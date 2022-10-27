import React, { useState } from 'react';
import ReactCardFlip from "react-card-flip";
import './CardFlip.css';

function CardFlip() {
  const [flip, setFlip] = useState(false);
  return (
      <ReactCardFlip isFlipped={flip}
          flipDirection="vertical">
          <div className='front-card'>

          {/* style={{
              width: '300px',
              height: '200px',
              background: '#e0edff',
              border:'2px solid #D8D8D8',
              boxShadow: '2px 2px #D8D8D8',
              fontFamily: 'Verdana, sans-serif',
              fontSize: '30px',
              color: '#1F1D36',
              margin: '20px',
              borderRadius: '4px',
              textAlign: 'center',
              padding: '20px'
          }} */}
              Hi✨ my name is Philippine...
              <br />
              <br />
              <button className='button-front-card' onClick={() => setFlip(!flip)}>

              {/* style={{
                  width: '150px',
                  padding: '13px',
                  fontSize: '15px',
                  background: '#FEC260',
                  fontWeight: 'bold',
                  color: '#787A91',
                  borderRadius: '5px'  }}*/}

                  Learn more</button>
          </div>
          <div style={{
              width: '300px',
              height: '200px',
              background: '#FEC260',
              border:'2px solid #D8D8D8',
              boxShadow: '2px 2px #D8D8D8',
              fontSize: '30px',
              fontFamily: 'Verdana, sans-serif',
              color: '#787A91',
              margin: '20px',
              borderRadius: '4px',
              textAlign: 'center',
              padding: '20px'
          }}>
              I made this card using React.
              <br />
              <button style={{
                  width: '150px',
                  padding: '15px',
                  marginTop: '40px',
                  fontSize: '15px',
                  background: '#e0edff',
                  color: '#1F1D36',
                  fontWeight: 'bold',
                  borderRadius: '7px'
              }} onClick={() => setFlip(!flip)}>
                  Flip Back</button>
          </div>
      </ReactCardFlip>
  );
}

export default CardFlip;

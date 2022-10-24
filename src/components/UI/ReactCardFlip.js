import React, { useState } from 'react';

function ReactCardFlip(props) {
const [flip, setFlip] = useState(false);

return (
  <div>
      <div isFlipped={flip} flipDirection="vertical" style={{
          width: '300px',
          height: '200px',
          background: '#d7fbda',
          fontSize: '40px',
          color: 'green',
          margin: '20px',
          borderRadius: '4px',
          textAlign: 'center',
          padding: '20px'
      }}>
          Welcome to GFG.
          <br />
          <br />
          <button style={{
              width: '150px',
              padding: '10px',
              fontSize: '20px',
              background: '#f5d9fa',
              fontWeight: 'bold',
              borderRadius: '5px'
          }} onClick={() => setFlip(!flip)}>
              Flip</button>
      </div>
      <div style={{
          width: '300px',
          height: '200px',
          background: '#fbd7f8',
          fontSize: '40px',
          color: 'blue',
          margin: '20px',
          borderRadius: '4px',
          textAlign: 'center',
          padding: '20px'
      }}>
          Computer Science Portal.
          <br />
          <button style={{
              width: '150px',
              padding: '10px',
              fontSize: '20px',
              background: '#f5d9fa',
              fontWeight: 'bold',
              borderRadius: '5px'
          }} onClick={() => setFlip(!flip)}>
              Flip</button>
      </div>
    </div>
  );
}

export default ReactCardFlip;

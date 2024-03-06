import React, { useState } from 'react';

function BalloonGame() {
  const [size, setSize] = useState(20);

  const pumpBalloon = () => {
    setSize(size + 5);
    if (size >= 100) {
      alert('Balloon popped!');
      setSize(20); // Reset balloon size
    }
  };

  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h1>Balloon Pumping Game</h1>
      <div style={{ display: 'inline-block', position: 'relative' }}>
        <div
          style={{
            width: size + 'px',
            height: size + 'px',
            backgroundColor: 'red',
            borderRadius: '50%',
            transition: 'width 0.5s, height 0.5s',
          }}
        ></div>
      </div>
      <br />
      <button onClick={pumpBalloon}>Pump Balloon</button>
    </div>
  );
}

export default BalloonGame;

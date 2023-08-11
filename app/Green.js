import React from 'react';

const GreenBtn = ({ click }) => {
  const handleClick = () => {
    click("green");
  };

  return (
    <button id="but2" onClick={handleClick}>
      Green
    </button>
  );
};

export default  GreenBtn;


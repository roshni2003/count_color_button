import React from 'react';

const RedBtn = ({ click }) => {
  const handleClick = () => {
    click("red"); 
  };

  return (
    <button id="but1" onClick={handleClick}>
      Red
    </button>
  );
};

export default RedBtn;


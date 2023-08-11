import React from 'react';

const BlueBtn = ({ click }) => {
  const handleClick = () => {
    click("blue");
  };

  return (
    <button id="but" onClick={handleClick}>
      Blue
    </button>
  );
};

export default BlueBtn;


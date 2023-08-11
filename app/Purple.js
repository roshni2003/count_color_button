import React from 'react';

const PurpleBtn = ({ click }) => {
  const handleClick = () => {
    click("purple"); 
  };

  return (
    <button id="but3" onClick={handleClick} >
      Purple
    </button>
  );
};

export default  PurpleBtn;


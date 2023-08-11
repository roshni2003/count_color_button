"use client"
import React, { useState, useEffect } from 'react';
import BlueBtn from './Blue';
import RedBtn from './Red';
import GreenBtn from './Green';
import PurpleBtn from './Purple';
import BlueCount from './BlueCount';
import RedCount from './RedCount';
import GreenCount from './GreenCount';
import PurpleCount from './PurpleCount';

const Count = () => {
  const [color, setColor] = useState("white");
  const [blueCount, setBlueCount] = useState(0);
  const [redCount, setRedCount] = useState(0);
  const [greenCount, setGreenCount] = useState(0);
  const [purpleCount, setPurpleCount] = useState(0);

  const changeColor = (newColor, countSetter) => {
    setColor(newColor);
    countSetter(prevCount => prevCount + 1);
  };

  useEffect(() => {
    document.getElementById("box").style.backgroundColor = color;
  }, [color]);

  return (
    <center>
      <div id="box"></div>
      <br />
      <BlueBtn click={() => changeColor("blue", setBlueCount)} />
      <RedBtn click={() => changeColor("red", setRedCount)} />
      <GreenBtn click={() => changeColor("green", setGreenCount)} />
      <PurpleBtn click={() => changeColor("purple", setPurpleCount)} />

      <BlueCount count={blueCount} />
      <RedCount count={redCount} />
      <GreenCount count={greenCount} />
      <PurpleCount count={purpleCount} />
    </center>
  );
};

export default Count;



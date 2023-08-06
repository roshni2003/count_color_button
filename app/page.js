"use client";
import {useState,useEffect} from 'react';

import Bluebtn from './Blue';
import Redbtn from './Red';
import Greenbtn from './Green';
import Purplebtn from './Purple';

const Count = () => {
    const [color,setColor] = useState ("white")
    const click = color => {
        setColor(color)
    }
    useEffect(()=>{
        document.body.style.backgroundColor=color
    },[])
    return (
        <>
        <center>
        <div id = "box"></div>
        <br></br>
        <Bluebtn 
            
        />
        <Redbtn />
        <Greenbtn />
        <Purplebtn />
        </center>
        </>
    )
};

export default Count;


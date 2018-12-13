import React, { Component } from 'react';
import './index.css';


function Ranges(props){
const {color, value, onChange} = props;
   return (
       <div style={{display:"inline-block"}}             >
            <input 
            name={color}
            id={color}
            className="colors"
            type="range" 
            step={1} 
            value={value}
            onChange={onChange}
            min={0}
            max={255}/>
        </div>
   ) 
}

export default Ranges
import React, { Component } from 'react';
import './App.css';

function Square(props){
    const {r, g, b}= props
    const color=`rgb(${r}, ${g}, ${b})`
    return (
        <div className="difcolor" style={{background:color}}>
        </div>
    )
}

export default Square
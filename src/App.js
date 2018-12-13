import React, { Component } from 'react';
import './index.css';
import Ranges from './inputs.js'
import Square from './Square'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
        r:0,
        g:0,
        b:0
    }
}

handleChange=(event)=>{
  const {name, value}=event.target
   this.setState({
    [name]:value
   })

}

  render() {
    const {r, g, b}= this.state
    const values=Object.values(this.state)
    let darker=0;
    let lighter=0;
    for(let i=0; i<values.length; i++){
      if(values[i]==255){
        lighter++;
      }
      if(values[i]===0){
        darker++;
      }
    }
    
    let shades=[
          {
          r:parseFloat(r)+10+((255-r)*0.8),
          g:parseFloat(g)+10+((255-g)*0.8),
          b:parseFloat(b)+10+((255-b)*0.8)
          },
          {
          r:parseFloat(r)+10+((255-r)*0.6),
          g:parseFloat(g)+10+((255-g)*0.6),
          b:parseFloat(b)+10+((255-b)*0.6)
          },
          {
          r:parseFloat(r)+10+((255-r)*0.3),
          g:parseFloat(g)+10+((255-g)*0.3),
          b:parseFloat(b)+10+((255-b)*0.3)
          },
          {
            r:r,
            g:g,
            b:b
          },
          {
            r:r*0.8,
            g:g*0.8,
            b:b*0.8
          },
          {
            r:r*0.6,
            g:g*0.6,
            b:b*0.6
          },
          {
            r:r*0.3,
            g:g*0.3,
            b:b*0.3
          },

        ]
    const color=`rgb(${r}, ${g}, ${b})`
    return (
      <div>
        <div 
          style={{background:color}}
          className="inputColor" />
        <div className="inputs">
        {
            ['r', 'g', 'b'].map(color=>(
              <Ranges
              key={color} 
              color={color}
              // className="colors"
              value={this.state[color]}
              onChange={this.handleChange}/>
            ))
        }
      </div>
        {
          darker !==3 && lighter!==3 ? (
              <div className="myDiv">
              {
                Object.keys(shades).map(item=>(
                  <Square key={item}
                  r={shades[item].r}
                  g={shades[item].g}
                  b={shades[item].b}/>
                ))
              }
            </div> 
          ): null
         }
      
    </div>
  )

  }
}

export default App;

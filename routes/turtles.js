import React from 'react'
import CompTurtle from '../dev/js/components/comp-turtle'

var myStyle = {
  	marginLeft: 30,
  	marginRight: 25,
  	fontFamily: 'Dosis'
}

export const Turtles = (props) => (
  <div style={myStyle}>
    <br />
    <h2>This is the Turtles Page</h2>
    <CompTurtle />
  </div>
)
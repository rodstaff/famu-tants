import React from 'react'
import CompTurtle from '../dev/js/components/comp-turtle'

var myStyle1 = {
  	marginLeft: 30
  }

export const Turtles = (props) => (
  <div style={myStyle1}>
    <br />
    <h2>This is the Turtles Page</h2>
    <CompTurtle />
  </div>
)
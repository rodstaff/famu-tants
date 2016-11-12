import React from 'react'
import CompUser from '../dev/js/components/comp-user'

var myStyle = {
  	marginLeft: 30,
  	marginRight: 25,
  	fontFamily: 'Dosis'
}

export const User = () => (
  <div style={myStyle}>
    <br />
    <h2>This is the Famous People Page</h2>
    <CompUser />
  </div>
)
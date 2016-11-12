import React from 'react'
import CompUser from '../dev/js/components/comp-user'

var myStyle1 = {
  	marginLeft: 30
  }

export const User = () => (
  <div style={myStyle1}>
    <br />
    <h2>This is the Famous People Page</h2>
    <CompUser />
  </div>
)
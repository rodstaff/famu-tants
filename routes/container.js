import React from 'react'
import { IndexLink } from 'react-router'

var myStyle1 = {
    fontFamily: 'Dosis'
  }
  var myStyle2 = {
    color: 'white'  // instead of <span class="icon-bar"></span> x3
  }


export const Container = (props) => (
  <div style={myStyle1}>
    <Nav /> 
    {props.children}
  </div>
)
const Nav = () => (

  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="" style={myStyle2}>MENU</span>
        </button>
      </div>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li><IndexLink activeClassName='active' to='/'>Home</IndexLink></li>
        <li><IndexLink activeClassName='active' to='/user'>Famous People</IndexLink></li>
        <li><IndexLink activeClassName='active' to='/turtles'>mutant turtles</IndexLink></li>
      </ul>
    </div>
  </nav>
)
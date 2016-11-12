import React from 'react'
import { IndexLink } from 'react-router'

export const Container = (props) => (
  <div>
    <Nav /> 
    {props.children}
  </div>
)
const Nav = () => (
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li><IndexLink activeClassName='active' to='/'>Home</IndexLink></li>
        <li><IndexLink activeClassName='active' to='/user'>Famous People</IndexLink></li>
        <li><IndexLink activeClassName='active' to='/turtles'>Mutant Turtles</IndexLink></li>
      </ul>
    </div>
  </nav>
)
import React from 'react'
import TurtleList from '../containers/turtle-list'
import TurtleDetail from '../containers/turtle-detail'
//require('../../scss/style.scss');

const CompTurtle = () => (
  <div>
    <h3>Ninja Turtles List:</h3>
    <TurtleList />
    <hr />
    <h3>Bio:</h3>
    <TurtleDetail />
  </div>
);
export default CompTurtle;
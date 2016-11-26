import React from 'react'
import { connect } from 'react-redux'
import SmileyFace from "../../../public/images/SmileyFace.jpeg"

//alternative code
@connect((state) => {    
  return {                           
  turtle: state.activeTurtle
  };
})

class TurtleDetail extends React.Component {
  render() {
    if (!this.props.turtle) {
      return (
        <h4>
           place the cursor over your favorite ninja and click...
        </h4>);
    }
  	return (
      <div>
        <img class="img-responsive" src={this.props.turtle.image} width="250" alt={SmileyFace} />
        <em>
          <h4>{this.props.turtle.name} aka "{this.props.turtle.aka}"</h4>
          <h4>age: &nbsp;&nbsp;{this.props.turtle.age}</h4>
          <h4>description: &nbsp;&nbsp;{this.props.turtle.description}</h4>
          <h5>(image and description courtesy of wikipedia)</h5>
        </em>
      </div>
  	);
  }
}
export default TurtleDetail;
// function mapStateToProps(state) {
//   return {
//     turtle: state.activeTurtle
//   };
// }
// export default connect(mapStateToProps)(TurtleDetail);
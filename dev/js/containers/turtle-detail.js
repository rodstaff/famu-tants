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
           Place the cursor over your favorite Ninja and click...
        </h4>);
    }
  	return (
      <div>
        <img class="img-responsive" src={this.props.turtle.image} width="250" alt={SmileyFace} />
        <em>
          <h4>{this.props.turtle.name} aka "{this.props.turtle.aka}"</h4>
          <h4>Age: {this.props.turtle.age}?</h4>
          <h4>Description: {this.props.turtle.description}</h4>
          <h5>(Images and descriptions courtesy of Wikipedia)</h5>
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
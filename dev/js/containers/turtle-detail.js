import React from 'react'
import { connect } from 'react-redux'

//alternative code
@connect((state) => {    
  return {                           
  turtle: state.activeTurtle
  };
})

class TurtleDetail extends React.Component {

    render() {
      if (!this.props.turtle) {
        return (<h4>Select your favorite Ninja...</h4>);
      };
  	  return (
        <div>
          <em>
            <h4>{this.props.turtle.name} aka "{this.props.turtle.aka}"</h4>
            <h4>Age: {this.props.turtle.age}?</h4>
            <h4>Description: {this.props.turtle.description}</h4>
            <h5>(Descriptions from Wikipedia)</h5>
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
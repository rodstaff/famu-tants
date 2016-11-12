import React from 'react'
import { connect } from 'react-redux'

//alternative code
@connect((state) => {    
  return {                           
  user: state.activeUser
  };
})

class UserDetail extends React.Component {
  render() {
    if (!this.props.user) {
      return (
        <h4>
          Place the cursor over your favorite famous person and select...
        </h4>);
    }
  	return (
      <div>
        <em>
           <h4>{this.props.user.name} {this.props.user.last}</h4>
           <h4>Born: {this.props.user.born}</h4>
           <h4>Would have been {this.props.user.age} yrs. old now, if were still alive.</h4>
           <h4>Description: {this.props.user.description}</h4>
           <h5>(Descriptions from Wikipedia)</h5>
        </em>
      </div>
  	);
  }
}
export default UserDetail;

// function mapStateToProps(state) {
//   return {
//     user: state.activeUser
//   };
// }
// export default connect(mapStateToProps)(UserDetail);

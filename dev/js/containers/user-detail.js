import React from 'react'
import { connect } from 'react-redux'
import SmileyFace from "../../../public/images/SmileyFace.jpeg"

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
        <img class="img-responsive" src={this.props.user.image} width="300" alt={SmileyFace} />
        <em>
           <h4>{this.props.user.name} {this.props.user.last}</h4>
           <h4>Born: &nbsp;&nbsp;{this.props.user.bornMonth} {this.props.user.bornDay}, {this.props.user.bornYear}{this.props.user.age[2]}</h4>
           <h4>Would have been around {this.props.user.age[0]} years and {this.props.user.age[1]} months old now, if were still alive.</h4>
           <h4>Description: &nbsp;&nbsp;{this.props.user.description}</h4>
           <h5>(Photos and descriptions courtesy of Wikipedia)</h5>
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

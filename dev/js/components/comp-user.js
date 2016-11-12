import React from 'react'
import UserList from '../containers/user-list'
import UserDetail from '../containers/user-detail'
//require('../../scss/style.scss');

const CompUser = () => (
   <div>
     <h3>Influential Persons List:</h3>
     <UserList />
     <hr/>
     <h3>Bio:</h3>
     <UserDetail />
   </div>
);
export default CompUser;
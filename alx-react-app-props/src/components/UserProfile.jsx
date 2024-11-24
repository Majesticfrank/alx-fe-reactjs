import React, {useContext} from 'react'
import UserContext from './UserContext'

function UserProfile() {
    const userData =useContext(UserContext);
  return (
    <div>
        <h3>user Profile</h3>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
 

import React from 'react';

const ProfileDetails = () => {
 
  const userDetails = {
    username: 'johndoe',
    email: 'johndoe@example.com',
    firstName: 'John',
    lastName: 'Doe',
    joinedDate: 'January 1, 2023',
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '600px', margin: '20px auto' }}>
      <h2>Profile Details</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <strong>Username:</strong> {userDetails.username}
        </li>
        <li>
          <strong>Email:</strong> {userDetails.email}
        </li>
        <li>
          <strong>First Name:</strong> {userDetails.firstName}
        </li>
        <li>
          <strong>Last Name:</strong> {userDetails.lastName}
        </li>
        <li>
          <strong>Joined Date:</strong> {userDetails.joinedDate}
        </li>
      </ul>
    </div>
  );
};

export default ProfileDetails;

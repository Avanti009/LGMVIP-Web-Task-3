// UserCard.js
import React from 'react';

function UserCard({ user }) {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.firstName} />
      <h2>{user.firstName} {user.lastName}</h2>
      <p>{user.email}</p>
    </div>
  );
}

export default UserCard;


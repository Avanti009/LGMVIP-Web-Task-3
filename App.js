import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import UserCard from './UserCard';

function App() {
  const brandName = "My User App";
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <Navbar brandName={brandName} getUsers={getUsers} />
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="user-grid">
          {users.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;










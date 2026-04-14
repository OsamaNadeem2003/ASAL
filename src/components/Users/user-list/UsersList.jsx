import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../user-card/UserCard";
import "../user-card/user-card.css";

export default function UsersList() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetch:", error);
    }
  };

  useEffect(() => {
    fetchUsers(); 
  }, []);

  return (
    <div className="users-container">
      <div className="users-list">
        {users.map((user) => (
          <UserCard
            userId={user.id}
            fullName={user.name}
            userName={user.username}
            emailAddress={user.email}
            address={user.address}
            phoneNumber={user.phone}
            websiteUrl={user.website}
            company={user.company}
          />
        ))}
      </div>
    </div>
  );
}
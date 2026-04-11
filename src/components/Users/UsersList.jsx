/*
The API goes through 3 steps:
1-Fetch the data
2-Convert it to JSON
3-console.log the data
======================================================
We have more than one way to fetch data from APIs.

1- The first way is by using fetch with async and await. However, the problem with 
useEffect is that it does not accept a Promise directly, so it gives a warning.

2-The second way is by using .then() inside useEffect.

3- The third way is to write an async function outside useEffect and then call it inside useEffect.
4- Using Axios outside useEffect and then call it inside useEffect. npm install axios

*/

//The first way : 
/*export default function UserList() {

    useEffect(async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    }, []);
    return (
       <>   </>
    );
}
*/
/*
//The second way :
export default function UserList() {
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => console.log(data))
    }, []);
    return (
       <>   </>
    );
}*/
//The third way :
/*
export default function UserList() {
const getUserData = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
}
useEffect(() => {
    getUserData();
}, []);
}
*/
//The fourth way :
import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import "./user-card.css";

export default function UsersList() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response.data);
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
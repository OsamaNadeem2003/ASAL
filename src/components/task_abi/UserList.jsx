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
import "./CardStyle.css";

export default function UserList() {
  const [users, setUsers] = useState([]);

  const getUserData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users");
    setUsers(response.data);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="container">
      <div className="cards">
        {users.map((user) => (
          <div className="card">
            <div className="information">
              <p><span>id:</span> {user.id}</p>
              <p><span>name:</span> {user.name}</p>
              <p><span>username:</span> {user.username}</p>
              <p><span>email:</span> {user.email}</p>
            </div>

            <div className="address">
              <h4>address:</h4>
              <div className="address_details">
                <p><span>street:</span> {user.address.street}</p>
                <p><span>suite:</span> {user.address.suite}</p>
                <p><span>city:</span> {user.address.city}</p>
                <p><span>zipcode:</span> {user.address.zipcode}</p>
              </div>

              <div className="address_geo">
                <h4>geo:</h4>
                <div className="geo_details">
                  <p><span>lat:</span> {user.address.geo.lat}</p>
                  <p><span>lng:</span> {user.address.geo.lng}</p>
                </div>
              </div>
            </div>

            <div className="contact">
              <p><span>phone:</span> {user.phone}</p>
              <p><span>website:</span> {user.website}</p>

              <div className="company">
                <h4>company:</h4>
                <div className="company_details">
                  <p><span>name:</span> {user.company.name}</p>
                  <p><span>catchPhrase:</span> {user.company.catchPhrase}</p>
                  <p><span>bs:</span> {user.company.bs}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
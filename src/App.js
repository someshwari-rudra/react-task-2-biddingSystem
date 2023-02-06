import React, { useEffect, useState } from "react";
import UserBid from "./screens/UserBid";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3500/users")
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  console.log(users);
  return (
    <div>
      <UserBid />
    </div>
  );
};

export default App;

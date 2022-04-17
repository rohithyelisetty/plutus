import React from "react";
import { useUserContext } from "../userContext";

const Dashboard = () => {
  const { user, logoutUser } = useUserContext();
  const nametype = user.displayName;
  const [name, ...brand_data] = nametype.split(';');
  const userType = brand_data.at(-1);

  return (
    <div>
      <h1>Dashboard </h1>
      {<h2>Name : {name}</h2> }
      <h2>Email : {user.email}</h2>
      {<h2>Type : {userType}</h2> }
      <button onClick={logoutUser}>Log out</button>
    </div>
  );
};

export default Dashboard

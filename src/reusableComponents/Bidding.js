import React from "react";
import { useSelector } from "react-redux";
import SingleUser from "./SingleUser";

const Bidding = () => {
  const name = useSelector((state) => state.generateUser.name);
  console.log("name", name);

  return (
    <div className="container">
      <h3>{name}</h3>
      <div className="row g-2">
        <SingleUser/>
        {/* <SingleUserBid/> */}
      </div>
    </div>
  );
};

export default Bidding;

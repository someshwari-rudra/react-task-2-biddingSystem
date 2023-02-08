import React from "react";
import { useSelector } from "react-redux";
import SingleBid from "./SingleBid";
import SingleUser from "./SingleUser";
import SingleUserBid from "./SingleUserBid";

const Bidding = () => {
  const price = [0,500,1000,2000,3000,4000]
  const name = useSelector((state) => state.generateUser.name);
  console.log("name", name);

  return (
    <div className="container">
      <h3>{name}</h3>
      <div className="row g-2">
        {/* <SingleUser/>  */}
        {/* <SingleUserBid /> */}
        {price.map((price) => {
         return <SingleBid key={price} price={price} name={name} />;
        })}
      </div>
    </div>
  );
};

export default Bidding;

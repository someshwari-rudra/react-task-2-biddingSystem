import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/Header'

const UserBid = () => {
  const users = useSelector((state) => state.generateUser.users);
  console.log('users :>> ', users);
  return (
    <div>
      <Header />
      {users.map((component, index) => (
        <Fragment key={index}>{component}</Fragment>
      ))}
    </div>
  );
}

export default UserBid
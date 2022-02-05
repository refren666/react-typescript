import React, {FC} from 'react';
import {IUser} from "../../interfaces";

interface IProps {
  user: IUser
}

const User:FC<IProps> = ({user}) => {
  const {id, username, name, email} = user

  return (
    <div>
      <h1>User #{id} {name}</h1>
      <h2>Username: {username}</h2>
      <h2>Email: {email}</h2>
    </div>
  );
};

export default User;
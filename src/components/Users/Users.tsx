import React, {FC, useEffect, useState} from 'react';

import {IUser} from "../../interfaces";
import {userService} from "../../services";
import User from "../User/User";

const Users: FC = () => {

  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    const getAllUsers = async () => {
      const axiosResponse = await userService.getAll();
      const {data} = axiosResponse; // data = users Array
      setUsers(data);
    }

    getAllUsers(); // можна робити цю функцію, як self-invoked!
  }, [])

  return (
    <div>
      {users.map(
        user => <User key={user.id} user={user}/>
      )}
    </div>
  );
};

export default Users;
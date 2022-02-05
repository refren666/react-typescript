import React, {FC} from 'react';

import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";


const App:FC = () => {
  return (
    <div>
      <Users />
      <hr/>
      <Posts />
    </div>
  );
}

export default App;

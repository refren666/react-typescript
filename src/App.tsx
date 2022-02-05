import React, {FC} from 'react';

import './App.css';
import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";

const App:FC = () => {
  return (
    <div>
      <Form />
      <hr/>
      <Cars />
    </div>
  );
}

export default App;

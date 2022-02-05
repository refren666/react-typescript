import React, {FC} from 'react';
import {ICar} from "../../interfaces/car.interface";

const Car:FC<{ car: ICar }> = ({car}) => {
  const {id, model, price, year} = car;

  return (
    <div>
      <h1>{id} Model: {model}</h1>
      <h3>Price: {price}</h3>
      <h3>Year: {year}</h3>
    </div>
  );
};

export default Car;
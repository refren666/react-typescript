import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {ICar} from "../../interfaces/car.interface";
import {useAppDispatch} from "../../hooks/redux";
import {addCarThunk} from "../../store/slices/car.slice";

const Form:FC = () => {
  const {
    register, handleSubmit, reset
  } = useForm<ICar>() // this will contain the object with values {id, model, price, year}

  const dispatch = useAppDispatch();

  const submit:SubmitHandler<ICar> = (car) => {
    dispatch(addCarThunk({car}))
    reset()
  }

  // {valueAsNumber: true} - changes type of input to number!
  return (
    <form onSubmit={handleSubmit(submit)}>
      <input type="text" placeholder={'model'} {...register('model')}/>
      <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
      <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
      <button>Click</button>
    </form>
  );
};

export default Form;
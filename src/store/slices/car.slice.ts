import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICar} from "../../interfaces/car.interface";
import {carService} from "../../services/car.service";

interface ICarState {
  cars: ICar[],
  update: ICar | null
}

const initialState: ICarState = {
  cars: [],
  update: null
}

export const getAllCars = createAsyncThunk(
  'carSlice/getAllCars',
  async (_, {dispatch}) => {
    const {data} = await carService.getAll()
    dispatch(setCars({cars:data}))
  }
)
                    // 1) Async function return - void! 2) It accepts car object as parameter! async({car: ICar})
export const addCarThunk = createAsyncThunk<void, {car: ICar}>(
  'carSlice/addCarThunk',
  async ({car}, {dispatch}) => {
    const {data} = await carService.create(car)
    dispatch(addCar({car: data}))
  }
)

const carSlice = createSlice({
  name: 'carSlice',
  initialState,
  reducers: {                                         // cars - array of cars
    setCars: (state, action:PayloadAction<{cars: ICar[]}>) => {
      state.cars = action.payload.cars;
    },                                            // car - car object
    addCar: (state, action:PayloadAction<{car: ICar}>) => {
      state.cars.push(action.payload.car)
    }
  }
})

const carReducer = carSlice.reducer;

export default carReducer;

export const {setCars, addCar} = carSlice.actions;

import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {ICharacter} from "../../interfaces/character.interface";
import {characterService} from "../../services/character.service";

const initialState:{characters: ICharacter[]} = {
  characters: []
}

export const getAllCharacters = createAsyncThunk<void, {id: string | undefined}>(
  'characterSlice/getAllCharacters',
  async ({id}, {dispatch}) => {
    const {data: {results}} = await characterService.getAllById(id)
    dispatch(setCharacters(results));
  }
)

const characterSlice = createSlice({
  name: 'characterSlice',
  initialState,
  reducers: {
    setCharacters: (state, action:PayloadAction<ICharacter[]>) => {
      state.characters = action.payload;
    }
  }
})

export const {setCharacters} = characterSlice.actions;

const characterReducer = characterSlice.reducer;

export default characterReducer;
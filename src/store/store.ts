import {combineReducers, configureStore} from "@reduxjs/toolkit";

import episodeReducer from "./slices/episode.slice";
import characterReducer from "./slices/character.slice";

const rootReducer = combineReducers({
  episodeReducer,
  characterReducer
})

export const setupStore = () => configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']


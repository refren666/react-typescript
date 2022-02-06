import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IEpisode} from "../../interfaces/episode.interface";
import {episodeService} from "../../services/episode.service";

interface IEpisodeState {
  episodes: IEpisode[]
  currentPage: number,
  episode: IEpisode | null
}

const initialState: IEpisodeState = {
  episodes: [],
  currentPage: 1,
  episode: null
}

export const getAllEpisodes = createAsyncThunk(
  'episodeSlice/getAllEpisodes',
  async (_, {dispatch}) => {
    const {data: {results}} = await episodeService.getAllPage(initialState.currentPage)
    dispatch(setEpisodes(results))
  }
)

export const getEpisodeById = createAsyncThunk<void, {id: string | undefined}>(
  'episodeSlice/getEpisodeById',
  async ({id}, {dispatch}) => {
    const {data} = await episodeService.getById(id)
    dispatch(setEpisode(data))
  }
)

const episodeSlice = createSlice({
  name: 'episodeSlice',
  initialState,
  reducers: {
    setEpisodes: (state, action:PayloadAction<IEpisode[]>) => {
      state.episodes = action.payload
    },
    setEpisode: (state, action:PayloadAction<IEpisode>) => {
      state.episode = action.payload
    }
  }
})

const episodeReducer = episodeSlice.reducer;

export default episodeReducer;

export const {setEpisodes, setEpisode} = episodeSlice.actions;
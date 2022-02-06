import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppLocation, useAppSelector} from "../../../hooks/redux";
import {getEpisodeById, setEpisode} from "../../../store/slices/episode.slice";
import EpisodeDetails from "../../../components/EpisodeDetails/EpisodeDetails";
import {IEpisode} from "../../../interfaces/episode.interface";


const EpisodePage: FC = () => {
  const {episode} = useAppSelector(state => state.episodeReducer)
  const dispatch = useAppDispatch();
  const {episodeId} = useParams();
  const {state} = useAppLocation<IEpisode>();

  useEffect(() => {
    if (state) {
      dispatch(setEpisode(state))
      return
    }

    dispatch(getEpisodeById({id: episodeId}))
  }, [])

  return (
    <div>
      {episode && <EpisodeDetails episode={episode}/>}
    </div>
  );
};

export default EpisodePage;
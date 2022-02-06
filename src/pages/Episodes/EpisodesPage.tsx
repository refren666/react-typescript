import React, {FC, useEffect} from 'react';
import {Link} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getAllEpisodes, moveToNextPage, moveToPrevPage} from "../../store/slices/episode.slice";
import Episode from "../../components/Episode/Episode";
import classes from './EpisodesPage.module.css'


const EpisodesPage: FC = () => {
  const {episodes, currentPage} = useAppSelector(state => state.episodeReducer)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllEpisodes());
  }, [currentPage])

  return (
    <div>
      <h1 className={classes.title}>Rick and Morty episodes</h1>

      <div className={classes.episodesWrapper}>
        {episodes.map(
          episode => <Episode key={episode.id} episode={episode}/>
        )}
      </div>

      <div className={classes.buttonsBlock}>
        <Link to={'/'}>
          <button className={classes.button} onClick={() => dispatch(moveToPrevPage())}>Prev</button>
        </Link>
        <Link to={'/'}>
          <button className={classes.button} onClick={() => dispatch(moveToNextPage())}>Next</button>
        </Link>
      </div>
    </div>
  );
};

export default EpisodesPage;
import React, {FC} from 'react';

import {IEpisode} from "../../interfaces/episode.interface";
import classes from './EpisodeHeader.module.css'

const EpisodeHeader:FC<{ episodeInfo: IEpisode }> = ({episodeInfo}) => {
  const {name, air_date, episode} = episodeInfo;

  return (
    <div className={classes.header}>
      <h2>Name: {name}</h2>
      <h3>Air date: {air_date}</h3>
      <h3>Episode: {episode}</h3>
    </div>
  );
};

export default EpisodeHeader;
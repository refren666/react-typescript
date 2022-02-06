import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {IEpisode} from "../../interfaces/episode.interface";
import classes from './Episode.module.css'

const Episode: FC<{ episode: IEpisode }> = ({episode}) => {
  const {id, episode: episodeName, name, air_date} = episode;

  return (
    <div className={classes.episodeBlock}>
      <div className={classes.episodeInfo}>
        <h3>{name}</h3>
        <p>Episode: {episodeName}</p>
        <p>Air Date: {air_date}</p>
      </div>


      <span>
        <Link className={classes.episodeLink}
              to={'episodes/' + id.toString()}
              state={{...episode}}
        >
        Episode details
      </Link>
      </span>
    </div>
  );
};

export default Episode;
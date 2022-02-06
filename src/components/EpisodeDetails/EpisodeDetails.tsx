import React, {FC, useEffect} from 'react';

import {IEpisode} from "../../interfaces/episode.interface";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getAllCharacters} from "../../store/slices/character.slice";
import EpisodeHeader from "../EpisodeHeader/EpisodeHeader";
import classes from './EpisodeDetails.module.css'
import CharacterDetails from "../CharacterDetails/CharacterDetails";

const EpisodeDetails:FC<{episode: IEpisode}> = ({episode}) => {
  const {characters} = useAppSelector(state => state.characterReducer)
  const dispatch = useAppDispatch();
  const {characters: episodeCharacters} = episode;

  const charactersId = episodeCharacters
    .map(characterURL => characterURL.split('/'))
    .map(arr => arr[arr.length - 1])
    .toString();

  useEffect(() => {
    dispatch(getAllCharacters({ id: charactersId }))
  }, [])

  console.log(characters)

  return (
    <div>
      <EpisodeHeader episodeInfo={episode}/>

      <div className={classes.charactersWrapper}>
        {/*{characters.map(*/}
        {/*  character => <CharacterDetails key={character.id} characterInfo={character}/>*/}
        {/*)}*/}
      </div>
    </div>
  );
};

export default EpisodeDetails;
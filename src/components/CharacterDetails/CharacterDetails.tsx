import React, {FC} from 'react';

import classes from './CharacterDetails.module.css'
import {ICharacter} from "../../interfaces/character.interface";

const CharacterDetails: FC<{characterInfo: ICharacter}> = ({characterInfo}) => {
  const {name, status, species, gender, image, location: {name: locationName}} = characterInfo;

  return (
    <div>
      <div className={classes.imageBlock}>
        <img className={classes.characterImage} src={image} alt="character"/>
      </div>

      <h4>Name: {name}</h4>
      <p>Status: {status}</p>
      <p>Species: {species}</p>
      <p>Gender: {gender}</p>
      <p>Location: {locationName}</p>
    </div>
  );
};

export default CharacterDetails;
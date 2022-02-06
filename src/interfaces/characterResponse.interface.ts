import {ICharacter} from "./character.interface";

export interface ICharacterResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null | string;
  }
  results: ICharacter[]
}
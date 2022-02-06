import axiosService from "./axios.service";
import {urls} from "../config/urls";
import {ICharacter} from "../interfaces/character.interface";

export const characterService = {
  getAllById: (charactersId: string | undefined) => axiosService
    .get<ICharacter[]>(`${urls.character}/${charactersId}`)
}
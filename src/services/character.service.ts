import axiosService from "./axios.service";
import {urls} from "../config/urls";
import {ICharacterResponse} from "../interfaces/characterResponse.interface";

export const characterService = {
  getAllById: (charactersId: string | undefined) => axiosService
    .get<ICharacterResponse>(`${urls.character}/${charactersId}`)
}
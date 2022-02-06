import axiosService from "./axios.service";
import {urls} from "../config/urls";
import {IEpisode} from "../interfaces/episode.interface";
import {IEpisodeResponse} from "../interfaces/episodeResponse.interface";

export const episodeService = {
  getAllPage: (pageNum: number) => axiosService.get<IEpisodeResponse>(`${urls.episode}?page=${pageNum}`),
  getById: (id: string | undefined) => axiosService.get<IEpisode>(`${urls.episode}/${id}`)
}
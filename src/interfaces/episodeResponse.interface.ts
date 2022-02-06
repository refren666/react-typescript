import {IEpisode} from "./episode.interface";

export interface IEpisodeResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null | string;
  }
  results: IEpisode[]
}
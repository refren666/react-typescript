import {axiosService} from "./axios.service";
import {IPost} from "../interfaces";
import {urls} from "../constants";

export const postService = {
  getAll: () => axiosService.get<IPost[]>(urls.posts)
}
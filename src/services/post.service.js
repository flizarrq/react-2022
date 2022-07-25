import {axiosInstance} from "./axios.service";
import {urls} from "../constans";

const postService = {
    getAll: () => axiosInstance.get(urls.posts)

}

export {
    postService
}
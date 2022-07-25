import {axiosInstance} from "./axios.service";
import {urls} from "../constans";

const commentService = {
    getAll: () => axiosInstance.get(urls.comments)
}

export {
    commentService
}
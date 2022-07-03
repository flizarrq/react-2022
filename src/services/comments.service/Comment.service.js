import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/comments',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
});

const createComments = (post) => {
    return axiosInstance.post('', post)
}

export {createComments}
import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const getTodos = () => axiosInstance.get('/todos').then(value => value.data);

const getAlbums = () => axiosInstance.get('/albums').then(value => value.data);

const getComments = () => axiosInstance.get('/comments').then(value => value.data);

const getPostOfComment = (id) => axiosInstance.get('/posts/' + {id}).then(value => value.data)


export {getTodos,getAlbums,getComments,getPostOfComment}
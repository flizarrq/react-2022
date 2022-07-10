import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {getPostOfComment} from "../../services/service";
import Post from "./Post";

function Posts() {
    const {postId} = useParams();

    const [post,setPost] = useState(null);

    useEffect(() => {
        getPostOfComment(postId).then(value => setPost(value))
    },[postId])

    return (
        <div>

            {post && <Post post={post}/>}
        </div>
    );
}

export default Posts;
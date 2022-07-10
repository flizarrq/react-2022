import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getPostOfComment} from "../../services/service";
import Post from "./Post";

function Posts() {
    const {postId} = useParams();

    const [posts,setPosts] = useState([]);

    useEffect(() => {
        getPostOfComment(postId).then(value => setPosts([{value}]))
    },[postId])

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
}

export default Posts;
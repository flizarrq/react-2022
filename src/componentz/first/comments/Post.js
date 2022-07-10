import React from 'react';

function Post({post}) {
    return (
        <div>
            <h3>{post.id}</h3>
            <p>{post.body}</p>
            <p>{post.title}</p>

        </div>
    );
}

export default Post;
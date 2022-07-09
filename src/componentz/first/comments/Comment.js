import React from 'react';

function Comment({comment:{postId,id,name,email,body}}) {
    return (
        <div className={'Comment'}>
            <div>id: {id},{postId}</div>
            <div>name: {name}</div>
            <div>mail: {email}</div>
            <div>body: {body}</div>
            <button>show post</button>

        </div>
    );
}

export default Comment;
import React from 'react';

import {Link, Outlet} from "react-router-dom";

function Comment({comment:{postId,id,name,email,body}}) {
    return (
        <div>
            <Outlet/>
            <div className={'Comment'}>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <div>mail: {email}</div>
                <div>body: {body}</div>
                <button><Link to={postId.toString()}>show post</Link></button>
            </div>
        </div>
    );
}

export default Comment;
import React, {useEffect, useState} from 'react';
import {getComments} from "../../services/service";
import Comment from "./Comment";

function Comments(props) {
    const [comments,setComments] = useState([]);

    useEffect(() => {
        getComments().then(data => setComments(data))
    },[])
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>

    );
}

export default Comments;
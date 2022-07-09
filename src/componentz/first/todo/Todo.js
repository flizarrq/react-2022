import React from 'react';

function Todo({todo: {id,userId,title,completed}}) {
    return (
        <div className={'Todo'}>
            {id} {userId} {title}

        </div>
    );
}

export default Todo;
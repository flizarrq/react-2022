import React from 'react';

function Album({album:{id,userId,title}}) {
    return (
        <div className={'Album'}>
            {id} {userId}  {title}
        </div>
    );
}

export default Album;
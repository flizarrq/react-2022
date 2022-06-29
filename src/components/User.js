import React from 'react';

function User({user,num,elevate}) {



    return (
        <div>
            <div>{num+1} {user.name}</div>
            <button onClick={() => {
                elevate(user.id)
            }}> post of this user</button>
        </div>
    );
}

export default User;
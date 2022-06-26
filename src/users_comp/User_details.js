import React from 'react';

function UserDetails({user}) {
    return (
        <div>
            <h2>{user.id}  {user.name}</h2>
            <div>{user.address.city}</div>
            <div>{user.address.street}</div>
            <div>{user.address.zipcode}</div>


        </div>
    );
}

export default UserDetails;
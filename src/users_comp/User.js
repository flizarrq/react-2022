import React from 'react';

function User({item, userBtn}) {
    return (
        <div>
            <h2>{item.id} {item.name}</h2>
            <button onClick={() => {
                userBtn(item)
            }}>click
            </button>

        </div>
    );
}

export default User;
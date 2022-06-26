import React, {useEffect, useState} from 'react';
import User from "./User";
import User_details from "./User_details";
// з jsonplaceholder отримати всіх юзерів в компоненту Users.js
// відобразити кожного інформацію (id,name) з кожного юзера (компонента User)
// Зробити кнопку вибора юзера, при натисканні на яку в Users.js ви покажете детальну інфомацію про
// користувача(довільно обрану інформацію)
function Users() {

    let [users, setUsers] = useState([]);

    let [user, setUser] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value)
            });
    })

    const userBtn = (item) => {
        setUser(item)
    }

    return (
        <div>
            {
                user && <User_details
                    user={user}
                />
            }
            {users.map(user => <User key={user.id} userBtn={userBtn}  item={user}/>)}
        </div>
    );
}

export default Users;
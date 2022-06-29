import {useEffect, useState} from "react";
import {getUsers} from "../services/user.api.service";
import User from "./User";

function Users({elevate}) {

    let [users, setUsers] = useState([]);



    useEffect(() => {
        getUsers().then(({data}) => setUsers([...data]));
    },[]);



    return (
        <div>

            {users.map((user,index) => <User key={user.id} elevate={elevate}  num={index} user={user}/>)}
        </div>
    );
}

export default Users;
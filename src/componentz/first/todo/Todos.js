import React, {useEffect, useState} from 'react';
import {getTodos} from "../../services/service";
import Todo from "./Todo";

function Todos() {
    const [todos,setTodos] = useState([]);

    useEffect(() => {
        getTodos().then(data => setTodos(data))
    },[])

    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
}

export default Todos;
import React from 'react';
import {Link,Outlet} from "react-router-dom";

function Main() {
    return (
        <div>
            <h1>Menu </h1>
            <h3><Link to={'todos'}>todos</Link></h3>
            <h3><Link to={'albums'}>albums</Link></h3>
            <h3><Link to={'comments'}>comments</Link></h3>

            <Outlet/>

        </div>
    );
}

export default Main;
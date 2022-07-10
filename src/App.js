import './App.css';
import {Routes, Link, Route, Outlet} from "react-router-dom";
import Main from "./componentz/Main/Main";
import Todos from "./componentz/first/todo/Todos";
import Albums from "./componentz/first/album/Albums";
import Comments from "./componentz/first/comments/Comments";
import Posts from "./componentz/first/comments/Posts";

function App() {
    return (
        <div>

            <Routes>
                <Route path={''} element={<Main/>}>
                    <Route path={'todos'} element={<Todos/>}/>
                    <Route path={'albums'} element={<Albums/>}/>
                    <Route path={'comments'} element={<Comments/>}>
                        <Route path={':postId'} element={<Posts/>}/>
                    </Route>
                </Route>

            </Routes>



        </div>
    );
}

export default App;

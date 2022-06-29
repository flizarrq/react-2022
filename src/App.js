import './App.css';
import Users from "./components/Users";
import {getUserPost} from "./services/user.api.service";
import {useState} from "react";

function App() {

    let [posts,setPosts] = useState([]);

    const elevate = (id) => {
        getUserPost(id).then(({data}) => setPosts([...data]))
    }
  return (
    <div>
        <h2>posts   </h2>
        <div>{posts.map(post => <div key={post.id}>  {post.id} {post.title}</div>)}</div>
        <hr/>

        <Users elevate={elevate}/>
    </div>
  );
}

export default App;

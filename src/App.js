import './App.css';
import Users from "./components/users/Users";
import Comments from "./components/posts/Comments";


function App() {
  return (
    <div className={'form'}>
        {/*Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом*/}
        {/*на http://jsonplaceholder.typicode.com/users*/}
        <Users/>
        {/*Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом */}
        {/*на http://jsonplaceholder.typicode.com/comments*/}
        <Comments/>
    </div>
  );
}

export default App;

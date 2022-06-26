import './App.css';
import Users from "./users_comp/Users";

function App() {
  return (
    <div>
        <Users/>
        є API от SpaceX
        https://api.spacexdata.com/v3/launches/
        потрібно вивести всі запуски кораблів окрім 2020 року
        репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)
    </div>
  );
}

export default App;

import './App.css';
import {Comments, Posts} from "./components";
import {Component} from "react";

class App extends Component{
  render() {
      return (
        <div>
            <Posts/>
            <Comments/>
        </div>
      )
  }

}

export default App;

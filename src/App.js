import {
  handleTimeout,
  handlleTimeout2,
  greeter,
} from "./listItems/listItems.js";
import twoSum from "./leetCode/chalanges.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>My first app</h1>
      </div>
      <div>
        {handleTimeout} {handlleTimeout2} {greeter}
      </div>
      <div>
        {twoSum}
      </div>
    </div>
  );
}

export default App;

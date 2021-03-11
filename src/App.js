import './App.css';
import configureStore from './store/configureStore';
import {bugAdded, bugRemoved, bugResolved, getUnresolvedBugs} from './store/bugs';
import * as projectActions from './store/projects';

const store = configureStore();

function App() {

  let state= "imm"

  store.subscribe(()=>{

      state = "state changed!"

  })

  store.dispatch({type: "bugsRecieved", bugs: [1,2,3]})




  return (
    <div className="App">

      <h1>React</h1>

      <span>{state}</span>
      
    </div>
  );
}

export default App;

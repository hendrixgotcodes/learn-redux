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

  

  // store

  store.dispatch(bugAdded({description: "bug1"}))
  store.dispatch(bugAdded({description: "bug2"}))
  getUnresolvedBugs(store.getState())

  store.dispatch(projectActions.projectAdded({name: "project1"}))
  store.dispatch(projectActions.projectAdded({name: "project2"}))

  store.dispatch(bugResolved({id:2}))




  return (
    <div className="App">

      <h1>React</h1>

      <span>{state}</span>
      
    </div>
  );
}

export default App;

import './App.css';
import configureStore from './store/configureStore';
import * as actions from './store/bugs';
import * as projectActions from './store/projects';

const store = configureStore();

function App() {

  let state= "imm"

  console.log(store);

  store.subscribe(()=>{

    console.log(store.getState());

      state = "state changed!"

  })

  

  // store

  store.dispatch(actions.bugAdded({description: "bug1"}))
  store.dispatch(actions.bugAdded({description: "bug2"}))
  store.dispatch(actions.bugAdded({description: "bug3"}))



  // store.dispatch(actions.bugRemoved())

  store.dispatch(actions.bugResolved({id: 1}))
  store.dispatch(projectActions.projectAdded({name: "project1"}))
  store.dispatch(projectActions.projectAdded({name: "project2"}))



  return (
    <div className="App">

      <h1>React</h1>

      <span>{state}</span>
      
    </div>
  );
}

export default App;

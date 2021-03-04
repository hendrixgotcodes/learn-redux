import './App.css';
import store from './store';
import * as actions from './actions';

function App() {

  let state= "imm"

  store.subscribe(()=>{

    console.log(store.getState());

      state = "state changed!"

  })

  store.dispatch(actions.bugAdded())

  // store.dispatch(actions.bugRemoved())

  store.dispatch(actions.bugResolved(1))


  return (
    <div className="App">

      <h1>React</h1>

      <span>{state}</span>
      
    </div>
  );
}

export default App;

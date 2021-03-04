import {createStore} from 'redux';
import reducer from './bugs';

const store = createStore(reducer)

export default store;
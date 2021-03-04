import {combineReducers} from 'redux';

import projectsReducer from './projects';
import bugReducer from './bugs';

export default combineReducers({

    bugs: bugReducer,
    projects: projectsReducer

})
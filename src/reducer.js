import * as actionTypes from './actionTypes';

export default function reducer(state=[], action){

    let lastId = 0;

    switch(action.type){

        case actionTypes.BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ]
        case actionTypes.BUG_REMOVED:
           return state.filter(bug => bug.id !== action.payload.id)

        case actionTypes.BUG_RESOLVED:
            return state.map(bug => bug.id === action.payload.id && {...bug, resolved: true})
        
        default:
            return state

    }

}
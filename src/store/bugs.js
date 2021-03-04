//Action Types
const BUG_ADDED = "bugAdded";
const BUG_REMOVED = "bugRemoved";
const BUG_RESOLVED = "bugResolved";


//Actions /Action creators

export function bugAdded(){

    return {
        type: BUG_ADDED,
        payload: {
           description: "Bug1"
        }
    }

}

export function bugRemoved(){

    return{
        type: BUG_REMOVED, 
        payload: {
            id: 1
        }
    }
    

}

export function bugResolved(id){

    return{
        type: BUG_RESOLVED,
        payload: {
            id
        }
    }

}

//Reducer
export default function reducer(state=[], action){

    let lastId = 0;

    switch(action.type){

        case BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ]
        case BUG_REMOVED:
           return state.filter(bug => bug.id !== action.payload.id)

        case BUG_RESOLVED:
            return state.map(bug => bug.id === action.payload.id && {...bug, resolved: true})
        
        default:
            return state

    }

}
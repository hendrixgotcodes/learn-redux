import * as actionTypes from './actionTypes';

export function bugAdded(){

    return {
        type: actionTypes.BUG_ADDED,
        payload: {
           description: "Bug1"
        }
    }

}

export function bugRemoved(){

    return{
        type: actionTypes.BUG_REMOVED, 
        payload: {
            id: 1
        }
    }
    

}

export function bugResolved(id){

    return{
        type: actionTypes.BUG_RESOLVED,
        payload: {
            id
        }
    }

}
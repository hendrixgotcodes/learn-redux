import {createSlice} from '@reduxjs/toolkit';
let lastId = 0;


const bugSlice = createSlice({
    name: "bugs",
    initialState: [],
    reducers: {

        bugAdded: (state, action)=>{

            state.push({
    
                id: ++lastId,
                description: action.payload.description,
                resolved: false
    
            })
    
        },
        bugRemoved: (state, action)=>{

            state.filter(bug=> bug.id === action.payload.id)
    
        },
    
        bugResolved: (state, action)=>{
    
            const index = state.filter(bug => bug.id === action.payload.id);
            state[index].resolved = true
    
        }

    }
})

export const {bugAdded, bugRemoved, bugResolved} = bugSlice.actions;
export default bugSlice.reducer;
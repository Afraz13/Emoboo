import { createSlice } from "@reduxjs/toolkit";



 export const counterSlice = createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    // actions are create inside the reducers key as object

    reducers:{
        increment:(state,actions)=>{
            
            state.value +=actions.payload
        },
        decrement:(state,ac)=>{
            state.value -=1
        },
        reset:(state)=>{
            state.value =0
        }
    }
 })
 export const {increment,decrement,reset} = counterSlice.actions

 export default counterSlice.reducer
import { createSlice } from "@reduxjs/toolkit";



 const counterSlice = createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    // actions are create inside the reducers key as object

    reducers:{
        increment:(state)=>{
            
            state.value +=1
        },
        decremen
    }
 })
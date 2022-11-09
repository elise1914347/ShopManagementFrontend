import {createSlice} from "@reduxjs/toolkit";


const authSlice = createSlice({
name:"authentication",
initialState:{token:"", user:{},isFetching:false},
// initialState:{ products:[],selectedProduct:{},}
reducers:{
    login(state,action){
        state.token = action.payload?.data?.token;
        state.user = action.payload?.data?.user;

    },
    setIsFetching(state,action){
        state.isFetching = action.payload;
    },
},

});

export const authActions = authSlice.actions;


export default authSlice.reducer;
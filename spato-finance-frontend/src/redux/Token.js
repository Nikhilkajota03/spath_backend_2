import { createSlice } from '@reduxjs/toolkit'

export const Tokenfunction = createSlice({

   name: 'Token',

  initialState: {
    Tokenfunction:null
},

   reducers:{
       setTokenFunction(state,action){
           state.Tokenfunction= action.payload;
       },
   }
}

)

export const {setTokenFunction} = Tokenfunction.actions;

export default Tokenfunction.reducer
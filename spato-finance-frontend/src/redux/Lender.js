import { createSlice } from '@reduxjs/toolkit'

export const lenderfunction = createSlice({

   name: 'lender',

  initialState: {
    lenderfunction:null
},

   reducers:{
       setlenderFunction(state,action){
           state.lenderfunction = action.payload;
       },
   }
}

)

export const {setlenderFunction} = lenderfunction.actions;

export default lenderfunction.reducer
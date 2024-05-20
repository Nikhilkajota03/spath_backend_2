import { configureStore } from "@reduxjs/toolkit";
import { Tokenfunction } from "./Token";
import { lenderfunction } from "./Lender";

const store = configureStore({
    reducer: {
        Token : Tokenfunction,
        lender: lenderfunction,
        
    },
});

export default store;
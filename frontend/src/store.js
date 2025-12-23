import { configureStore } from "@reduxjs/toolkit";
import authreducer from './features/AuthSlice'


export const store =configureStore({
    reducer:{
        auth:authreducer
        
    }
})
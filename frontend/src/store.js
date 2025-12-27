import { configureStore } from "@reduxjs/toolkit";
import authreducer from './features/AuthSlice'
import jobreducer from './features/JobSlice'

export const store =configureStore({
    reducer:{
        auth:authreducer,
        job:jobreducer

        
    }
})
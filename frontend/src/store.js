import { configureStore } from "@reduxjs/toolkit";
import authreducer from './features/AuthSlice'
import jobreducer from './features/JobSlice'
import applicationreducer from './features/ApplicationSlice'
export const store =configureStore({
    reducer:{
        auth:authreducer,
        job:jobreducer,
        application:applicationreducer

        
    }
})
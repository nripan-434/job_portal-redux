import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";


const State={
    job:[],
    status:'success'
}

export const jobreg = createAsyncThunk('post/jobreg', async (form)=>{
    const res = await axios.post('http://localhost:5000/job/jobreg',form)
    if(res.data.message){
        toast.success(res.data.message)
    }
    else if(res.data.error){
        toast.error(res.data.error)

    }
})
const JobSlice = createSlice({
    name:'job',
    initialState:State,
    reducers:{
        
    },
    extraReducers(builder){
        builder.addCase(jobreg.pending,(state)=>{
            state.status='loading'
        })
        .addCase(jobreg.fulfilled,(state)=>{
            state.status='success'
        })
        .addCase(jobreg.rejected,(state)=>{
            state.status='rejected'
        })
    }
})
export const{}=JobSlice.actions
export default JobSlice.reducer
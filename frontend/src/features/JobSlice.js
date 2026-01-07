import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";


const State = {
    jobs: JSON.parse(localStorage.getItem('jobs')) || [],
    jobapplications:[],
    jobsearchs:[],
    status: 'success'
}

export const jobreg = createAsyncThunk('post/jobreg', async (form) => {
    const res = await axios.post('http://localhost:5000/job/jobreg', form)
    if (res.data.message) {
        toast.success(res.data.message)
    }
    else if (res.data.error) {
        toast.error(res.data.error)

    }
})
export const getalljob = createAsyncThunk('get/getalljob', async () => {
    const res = await axios.get('http://localhost:5000/job/getalljobs')
    if(!res){
        console.log("no res")
    }
    return res.data.jobs

})
export const getjobapplications = createAsyncThunk('get/getjobapplications',async(userid)=>{
    const res= await axios.get(`http://localhost:5000/job/getjobapplications/${userid}`)
    return res.data.jobapplications
})
export const jobsearch = createAsyncThunk('get/jobsearch',async(search)=>{
    const res = await axios.get('http://localhost:5000/job/jobsearch',{params:{search:search}})
    return res.data
})

const JobSlice = createSlice({
    name: 'job',
    initialState: State,
    reducers: {
        clearjobsearch:(state)=>{
            state.jobsearchs=[]
        }

    },
    extraReducers(builder) {
        builder.addCase(jobreg.pending, (state) => {
            state.status = 'loading'
        })
            .addCase(jobreg.fulfilled, (state) => {
                state.status = 'success'
            })
            .addCase(jobreg.rejected, (state) => {
                state.status = 'rejected'
            })
            .addCase(getalljob.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(getalljob.fulfilled, (state, action) => {
                state.status = 'success'
                state.jobs = action.payload
                localStorage.setItem('jobs', JSON.stringify(action.payload))
            })
            .addCase(getalljob.rejected, (state) => {
                state.status = 'rejected'
            })
            .addCase(getjobapplications.pending,(state)=>{
                state.status='pending'
            })
            .addCase(getjobapplications.fulfilled,(state,action)=>{
                state.status='success'
                state.jobapplications=action.payload
            })
            .addCase(getjobapplications.rejected,(state)=>{
                state.status='rejected'
            })  
            .addCase(jobsearch.pending,(state)=>{
                state.status='pending'
            })
            .addCase(jobsearch.fulfilled,(state,action)=>{
                state.status='success'
                state.jobsearchs=action.payload.jobs
            })
            .addCase(jobsearch.rejected,(state)=>{
                state.status='rejected'
            })  
    }
})
export const {clearjobsearch} = JobSlice.actions
export default JobSlice.reducer
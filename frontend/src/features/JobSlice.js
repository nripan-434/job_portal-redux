import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";


const State = {
    jobs: JSON.parse(localStorage.getItem('jobs')) || [],
    latestjobs: [],
    jobapplications: [],
    jobsearchs: [],
    searchword: null,
    emptyres: null,
    status: 'success'
}

export const jobreg = createAsyncThunk('post/jobreg', async (form) => {
    const res = await axios.post('http://localhost:5000/job/jobreg', form)
    return res.data
})
export const getalljob = createAsyncThunk('get/getalljob', async () => {
    const res = await axios.get('http://localhost:5000/job/getalljobs')
    if (!res) {
        console.log("no res")
    }
    return res.data.jobs

})
export const getlatestjob = createAsyncThunk('get/getlatestjob', async () => {
    const res = await axios.get('http://localhost:5000/job/getlatestjob')

    return res.data.latestjobs

})
export const getjobapplications = createAsyncThunk('get/getjobapplications', async (userid) => {
    const res = await axios.get(`http://localhost:5000/job/getjobapplications/${userid}`)
    return res.data.jobapplications
})
export const jobsearch = createAsyncThunk('get/jobsearch', async (search) => {
    const res = await axios.get('http://localhost:5000/job/jobsearch', { params: { search: search } })
    return res.data
})
export const addtobookmark = createAsyncThunk('patch/addtobookmark', async ({ jobid }) => {
    const res = await axios.patch(`http://localhost:5000/job/addtobookmark/${jobid}`)
    return res.data
})
export const removebookmark = createAsyncThunk('patch/removebookmark', async ({ jobid }) => {
    const res = await axios.patch(`http://localhost:5000/job/removebookmark/${jobid}`)
    return res.data
})
export const removejob = createAsyncThunk('delete/removejob', async ( jobid) => {
    const res = await axios.delete(`http://localhost:5000/job/removejob/${jobid}`)
    return res.data
})


const JobSlice = createSlice({
    name: 'job',
    initialState: State,
    reducers: {
        clearjobsearch: (state) => {
            state.jobsearchs = [],
                state.emptyres = null,
                state.searchword = null
        }

    },
    extraReducers(builder) {
        builder.addCase(jobreg.pending, (state) => {
            state.status = 'loading'
        })
            .addCase(jobreg.fulfilled, (state, action) => {
                state.status = 'success'
                if (action.payload.message) {
                    toast.success(action.payload.message)
                }
                else if (action.payload.error) {
                    toast.error(action.payload.error)

                }
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
            .addCase(getjobapplications.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(getjobapplications.fulfilled, (state, action) => {
                state.status = 'success'
                state.jobapplications = action.payload
            })
            .addCase(getjobapplications.rejected, (state) => {
                state.status = 'rejected'
            })
            .addCase(jobsearch.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(jobsearch.fulfilled, (state, action) => {
                state.status = 'success'

                state.searchword = action.payload.search
                if (action.payload.emptyres) {
                    state.emptyres = action.payload.emptyres
                }
                if (action.payload.error) {
                    toast.error(action.payload.error)
                }
                state.jobsearchs = action.payload.jobs
            })
            .addCase(jobsearch.rejected, (state) => {
                state.status = 'rejected'
            })
            .addCase(getlatestjob.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(getlatestjob.fulfilled, (state, action) => {
                state.status = 'success'
                state.latestjobs = action.payload
            })
            .addCase(getlatestjob.rejected, (state) => {
                state.status = 'rejected'
            })
        builder.addCase(addtobookmark.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(addtobookmark.fulfilled, (state, action) => {
            state.status = 'success'
            if (action.payload.message) {
                toast.success(action.payload.message)
            }
            else if (action.payload.error) {
                toast.error(action.payload.error)
            }
        })
        builder.addCase(addtobookmark.rejected, (state) => {
            state.status = 'rejected'
        })
        builder.addCase(removejob.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(removejob.fulfilled, (state, action) => {
            state.status = 'success'
            if (action.payload.message) {
                toast.success(action.payload.message)
            }
            else if (action.payload.error) {
                toast.error(action.payload.error)
            }
        })
        builder.addCase(removejob.rejected, (state) => {
            state.status = 'rejected'
        })

    }
})
export const { clearjobsearch } = JobSlice.actions
export default JobSlice.reducer
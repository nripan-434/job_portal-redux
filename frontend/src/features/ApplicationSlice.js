import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../api/axiosInstance";
import axios from "axios";
import toast from "react-hot-toast";

const initialState = {
    application: [],
    applicants: [],
    userapplies: [],
    status: 'success'
}

export const applicationreg = createAsyncThunk('post/applicationreg', async (form) => {
    const res = await API.post('/application/Applicationreg', form)
    return res.data
})
export const getapplicants = createAsyncThunk('get/getapplicants', async (jobid) => {
    const res = await API.get(`/application/getapplicants/${jobid}`)
    if (res.data.applicants) {
        console.log(res.data.applicants)
    }
    return res.data.applicants
})
export const changestatus = createAsyncThunk('patch/changestatus', async ({ id, status }) => {
    console.log(id)
    const res = await API.patch(`/application/changestatus/${id}`, { status })
    if (res.data.error) {
        toast.error(res.data.error)
    }
    else {
        toast.success(res.data.success)
    }
})
export const userapplications = createAsyncThunk('get/userapplications', async (userid) => {
    const res = await API.get(`/application/userapplications/${userid}`)
    return res.data.userapplications
})
export const withdrawapplication = createAsyncThunk('patch/withdrawapplication', async (id) => {
    const res = await API.patch(`/application/withdrawapplication/${id}`)
    return res.data
})
export const reapply = createAsyncThunk('put/reapply', async ({ appid, form }) => {
    const res = await API.put(`/application/reapply/${appid}`, form)
    return res.data
})

const ApplicationSlice = createSlice({
    name: 'application',
    initialState: initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(applicationreg.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(applicationreg.fulfilled, (state, action) => {
            state.status = 'success'
            if (action.payload.message) {
                 toast.success(action.payload.message)
            }
            else if (action.payload.error) {
                 toast.error(action.payload.error)
            }
            
        })
        builder.addCase(applicationreg.rejected, (state) => {
            state.status = 'rejected'
        })
        builder.addCase(getapplicants.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(getapplicants.fulfilled, (state, action) => {
            state.status = 'success'
            state.applicants = action.payload
        })
        builder.addCase(getapplicants.rejected, (state) => {
            state.status = 'rejected'
        })
        builder.addCase(changestatus.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(changestatus.fulfilled, (state) => {
            state.status = 'success'
        })
        builder.addCase(changestatus.rejected, (state) => {
            state.status = 'rejected'
        })
        builder.addCase(userapplications.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(userapplications.fulfilled, (state, action) => {
            state.userapplies = action.payload
            state.status = 'success'
        })
        builder.addCase(userapplications.rejected, (state) => {
            state.status = 'rejected'
        })
        builder.addCase(withdrawapplication.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(withdrawapplication.fulfilled, (state, action) => {
            state.status = 'success'
            if (action.payload.message) {
                toast.success(action.payload.message)
            }
            else if (action.payload.error) {
                toast.success(action.payload.error)
            }
        })
        builder.addCase(withdrawapplication.rejected, (state) => {
            state.status = 'rejected'
        })
        builder.addCase(reapply.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(reapply.fulfilled, (state, action) => {
            state.status = 'success'
            if (action.payload.message) {
                toast.success(action.payload.message)
            }
            else if (action.payload.error) {
                toast.error(action.payload.error)
            }
        })
        builder.addCase(reapply.rejected, (state) => {
            state.status = 'rejected'
        })

    }

})

export const { } = ApplicationSlice.actions
export default ApplicationSlice.reducer
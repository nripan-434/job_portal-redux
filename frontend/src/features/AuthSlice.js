import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || [],
    status: 'success'

}
export const reg = createAsyncThunk('post/postreg', async (form) => {
    const res = await axios.post('http://localhost:5000/users/register', form)
    if (res.data.message) {
        toast.success(res.data.message)
    }
    else if (res.data.error) {
        toast.error(res.data.error)
    }
    
})
export const login = createAsyncThunk('post/login', async(form)=>{
const res = await axios.post('http://localhost:5000/users/login',form)
    
   if (res.data.message) {
        toast.success(res.data.message)
    }
    else if (res.data.error) {
        toast.error(res.data.error)
    }
})
const AuthSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {


    },
    extraReducers(builder) {
        builder.addCase(reg.pending, (state) => {
            state.status = 'loading'
        })
            .addCase(reg.fulfilled, (state) => {
                state.loading = 'success';
            })
            .addCase(reg.rejected, (state) => [
                state.status = 'failed'
            ])

    }

})
export const { } = AuthSlice.actions
export default AuthSlice.reducer


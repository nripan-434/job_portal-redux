import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: JSON.parse(localStorage.getItem('token')) || null,
    status: 'success',
    error: null

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
export const login = createAsyncThunk('post/login', async (form) => {
    const res = await axios.post('http://localhost:5000/users/login', form)

    if (res.data.error) {
        toast.error(res.data.error)
        return isRejectedWithValue(res.data.error)
    }
    toast.success(res.data.message)
    return res.data
})
const AuthSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.error=null;
            state.status='idle';
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        }
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
            .addCase(login.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.currentuser;
                state.token = action.payload.token
                localStorage.setItem('user', JSON.stringify(action.payload.currentuser))
                localStorage.setItem('token', JSON.stringify(action.payload.token))
            })
            .addCase(login.rejected, (state,action) => {
                state.status = 'failed';
                state.error = action.payload
            })

    }

})
export const { logout } = AuthSlice.actions
export default AuthSlice.reducer


import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    error: null,
    token: null,
    currentUser: null,
    isAuthenticated: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signUpStart: (state) => {
            state.loading = true
            state.error = null
        },
        signUpSuccess: (state, action) => {
            state.loading = false
            state.currentUser = action.payload
            state.error = null
        },
        signUpFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        signInStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        signInSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload.user;
            state.isAuthenticated = true;
            state.token = action.payload.token;
        },
        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logOut: (state) => {
            state.loading = false;
            state.error = null;
            state.currentUser = null;
            state.isAuthenticated = false;
            state.token = null
        }
    }
})

// Action creators are generated for each case reducer function
export const { signUpStart, signUpSuccess, signUpFailure, signInStart, signInSuccess, signInFailure, logOut } = userSlice.actions

export default userSlice.reducer
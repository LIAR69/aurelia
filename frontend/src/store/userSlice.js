import { createSlice } from "@reduxjs/toolkit"

const initialState = ({
    id: "",
    name : "",
    email: "",
    password:""
})

export const userSlice = createSlice({
    name : "user",
    initialState, 
    reducers: ({
        registerRedux: (state , action)=>{
            console.log(action.payload)
            state.id = action.payload.id
            state.name = action.payload.name
            state.email = action.payload.email
            state.password = action.payload.password
        }
    })
})

export const {
    registerRedux
} = userSlice.actions

export default userSlice.reducer
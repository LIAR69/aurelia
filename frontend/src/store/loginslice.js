import { createSlice } from "@reduxjs/toolkit"

const initialState = ({
    id: "",
    name : "",
    email: "",
    password:""
})

export const loginslice = createSlice({
    name : "user1",
    initialState, 
    reducers: ({
        loginRedux: (state , action)=>{
            console.log(action.payload)
            state.id = action.payload.id
            state.name = action.payload.name
            state.email = action.payload.email
            state.password = action.payload.password
        },
        logoutRedux: (state, action)=>{
            
            
            
            state.email = ""
        }
    })
})

export const {
    loginRedux,logoutRedux
} = loginslice.actions

export default loginslice.reducer
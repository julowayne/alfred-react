import { createSelector, createSlice } from '@reduxjs/toolkit'


const initialState = {

    openedFirst : false, // onboarding (TO FALSE)
    logging : false, // sign-in / sign-up (TO FALSE)
    user : {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        status_id: "",
    },
    fields: [],
    files : {
        id: null,
        path: null,
        fieldId: null,
        guarantorId: null
    },
    status: []
}

export const landingSlice = createSlice({
    name: 'landing',
    initialState,
    reducers:{
        setOpenFirst : (state, action) => {
            state.openedFirst = action.payload
        },
        setLogging : (state, action) => {
            state.logging = action.payload
        },
        setUser : (state, action) => {
            state.user = action.payload
        },
        setFields : (state, action) => {
            state.fields = action.payload
        },
        setFiles : (state, action) => {
            state.files = action.payload
        },
        setStatus : (state, action) => {
            state.status = action.payload
        },
    }
})

export const {setOpenFirst, setLogging, setUser, setFields, setFiles, setStatus} = landingSlice.actions
export const selectSelf = state => state[landingSlice.name]



export const selectOpenFirst = createSelector(selectSelf, state => state.openedFirst)
export const selectLogging = createSelector(selectSelf, state => state.logging)
export const selectUser = createSelector(selectSelf, state => state.user)
export const selectFields = createSelector(selectSelf, state => state.fields)
export const selectFiles = createSelector(selectSelf, state => state.files)
export const selectStatus = createSelector(selectSelf, state => state.status)

export default landingSlice.reducer
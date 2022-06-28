import { createSelector, createSlice } from '@reduxjs/toolkit'


const initialState = {
    openedFirst : false, // onboarding (TO FALSE)
    logging : false, // sign-in / sign-up (TO FALSE)
    addFileLoading: false,
    btnLoader: false,
    user : {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        status_id: "",
    },
    fields: [],
    files : {},
    status: [],
    guarantor: {
        first_name: '',
        last_name: ''
    },
    guarantorFiles : [],
    notifications: []
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
        setGuarantor : (state, action) => {
            state.guarantor = action.payload
        },
        setGuarantorFiles : (state, action) => {
            state.guarantorFiles = action.payload
        },
        setAddFileLoading : (state, action) => {
            state.addFileLoading = action.payload
        },
        setBtnLoader : (state, action) => {
            state.btnLoader = action.payload
        },
        setNotifications : (state, action) => {
            state.notifications = action.payload
        },
    }
})

export const {setOpenFirst, setLogging, setUser, setFields, setFiles, setStatus, setGuarantor, setGuarantorFiles, setAddFileLoading, setBtnLoader, setNotifications} = landingSlice.actions
export const selectSelf = state => state[landingSlice.name]



export const selectOpenFirst = createSelector(selectSelf, state => state.openedFirst)
export const selectLogging = createSelector(selectSelf, state => state.logging)
export const selectUser = createSelector(selectSelf, state => state.user)
export const selectFields = createSelector(selectSelf, state => state.fields)
export const selectFiles = createSelector(selectSelf, state => state.files)
export const selectStatus = createSelector(selectSelf, state => state.status)
export const selectGuarantor = createSelector(selectSelf, state => state.guarantor)
export const selectGuarantorFiles = createSelector(selectSelf, state => state.guarantorFiles)
export const selectAddFileLoading = createSelector(selectSelf, state => state.addFileLoading)
export const selectBtnLoader = createSelector(selectSelf, state => state.btnLoader)
export const selectNotifications = createSelector(selectSelf, state => state.notifications)

export default landingSlice.reducer
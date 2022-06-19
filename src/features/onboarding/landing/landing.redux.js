import { createSelector, createSlice } from '@reduxjs/toolkit'


const initialState = {
    vins: [],
    name: 'toto',
    vendeurs: [],
    openedFirst : false, // onboarding (TO FALSE)
    logging : false, // sign-in / sign-up (TO FALSE)
    user : {},
    fields: [],
    files : {
        id: null,
        path: null,
        fieldId: null,
        guarantorId: null
    }
}

export const landingSlice = createSlice({
    name: 'landing',
    initialState,
    reducers:{
        updateVins: (state, action) => {
            state.vins = action.payload
        },
        updateVendeurs: (state, action) => {
            state.vendeurs = action.paylad
        },
        setName: (state, action) => {
            state.name = action.payload
        },
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
    }
})

export const {updateVins, updateVendeurs, setName, setOpenFirst, setLogging, setUser, setFields} = landingSlice.actions
export const selectSelf = state => state[landingSlice.name]
export const selectVins = createSelector(selectSelf, state => state.vins)
export const selectName = createSelector(selectSelf, state => state.name)


export const selectOpenFirst = createSelector(selectSelf, state => state.openedFirst)
export const selectLogging = createSelector(selectSelf, state => state.logging)
export const selectUser = createSelector(selectSelf, state => state.user)
export const selectFields = createSelector(selectSelf, state => state.fields)

export default landingSlice.reducer
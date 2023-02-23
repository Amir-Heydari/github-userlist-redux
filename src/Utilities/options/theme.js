import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   text:'#000000',
    border:'#000000',
    background:'#FFFFFF',
}

export const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    textCH: (state,action) => {
         state.text = action.payload
    },
    borderCh: (state,action) => {
      state.border = action.payload
    },
    backgroundCh: (state, action) => {
      state.background = action.payload
    },
  },
})


export const { textCH, borderCh, backgroundCh } = optionsSlice.actions

export default optionsSlice.reducer
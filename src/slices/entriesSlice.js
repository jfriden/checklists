import {createSlice, nanoid} from "@reduxjs/toolkit"

import testData from "../testData"

const initialState = testData.entries

export const entriesSlice = createSlice({
  name: "entries",
  initialState,
  reducers: {
    addEntry: {
      reducer(state, action) { state.push(action.payload) },
      prepare(belongsTo, text) { 
        return {payload: {id: nanoid(), belongsTo: belongsTo, checked: false, text: text}} 
      }
    },
    updateEntry(state, action) { 
      const index = state.findIndex(entry => entry.id === action.payload.id)
      state[index] = action.payload 
    },
    removeEntry(state, action) { return state.filter(entry => entry.id !== action.payload) },
    removeChecked(state) { return state.filter(entry => !entry.checked) }
  }
})

export const {addEntry, updateEntry, removeEntry, removeChecked} = entriesSlice.actions

export default entriesSlice.reducer

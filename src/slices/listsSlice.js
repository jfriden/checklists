import {createSlice, nanoid} from "@reduxjs/toolkit"

import testData from "../testData"

const initialState = testData.lists

export const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    addList: {
      reducer(state, action) { state.push(action.payload) },
      prepare(name) { return {payload: {id: nanoid(), name: name}} }
    },
    updateList(state, action) { 
      const index = state.findIndex(list => list.id === action.payload.id)
      state[index] = action.payload
    },
    removeList(state, action) { return state.filter(list => list.id !== action.payload) }
  }
})

export const {addList, updateList, removeList} = listsSlice.actions

export default listsSlice.reducer
